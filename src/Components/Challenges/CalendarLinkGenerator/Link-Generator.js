import React, { useRef, useState } from 'react'
import './Link-Generator.css';
import TextareaAutosize from 'react-textarea-autosize';

function LinkGenerator() {

    const [finalLink, setFinalLink] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")

    const [copySuccess, setCopySuccess] = useState('');
    const FinalLinkRef = useRef(null)

    
    // Set Final Link Once Button Has Been Clicked
    const handleLinkGenClick = () => {
        let linkDraft = "https://www.google.com/calendar/render?action=TEMPLATE"

        linkDraft += ("&text=" + title)
        linkDraft += ("&details=" + description)
        linkDraft += ("&location=" + location)
        linkDraft += ("&dates=" + getTimeFromDate(startTime) + "%2F" + getTimeFromDate(endTime))
        

        setFinalLink(linkDraft)
    }

    function getTimeFromDate(dateInput) {
        let dateFinal = ''

        let year = new Date(dateInput).getFullYear()
        let month = returnTwoDigits(new Date(dateInput).getMonth() + 1)
        let date = returnTwoDigits(new Date(dateInput).getDate())
        let hoursNum = new Date(dateInput).getHours()
        // Minus 1 hour... because Daylight Savings time :P
        console.log(hoursNum)
            if (hoursNum >= 1) {
                hoursNum -= 1
            } else {
                date -= 1
                hoursNum = 23
            }
        let hours = returnTwoDigits(hoursNum)
        let minutes = returnTwoDigits(new Date(dateInput).getMinutes())
        dateFinal += (year + month + date + "T" + hours + minutes + "00Z")
 
        return dateFinal;
    }

    function returnTwoDigits(num) {
        return (('0' + num).slice(-2));
    }

    // Handle Changes In Input Boxes
    const onChangeLink = (e) => { setFinalLink(e.target.value); setCopySuccess('');}
    const onChangeTitle = (e) => { setTitle(e.target.value); setCopySuccess(''); }
    const onChangeDesctiption = (e) => { setDescription(e.target.value); setCopySuccess(''); }
    const onChangeLocation = (e) => { setLocation(e.target.value); setCopySuccess(''); }
    const onChangeStartTime = (e) => { setStartTime(e.target.value); setCopySuccess(''); }
    const onChangeEndTime = (e) => { setEndTime(e.target.value); setCopySuccess(''); }


    // Copy Final Link to Clipboard
    function copyToClipboard(e) {
        FinalLinkRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('...Copied!');
      };


      

    return (
        <>
        <p>Link Generator for Google Calendar Events</p>
        <div className="gernerator-container">
            <div className="input-section">
                <h3>Event Info</h3>

                <p>Title:</p>
                <TextareaAutosize  className="super-input-box" onChange={onChangeTitle}/>

                <p>Location:</p>
                <TextareaAutosize  className="super-input-box" onChange={onChangeLocation}/>

                <p>Description:</p>
                <TextareaAutosize className="super-input-box" rows="4" onChange={onChangeDesctiption}/>



                <h3>Date and Time</h3>

                <p>Start:</p>
                <input  className="super-input-box" type="datetime-local" onChange={onChangeStartTime}></input>

                <p>End:</p>
                <input  className="super-input-box" type="datetime-local" onChange={onChangeEndTime}></input>


                <button className="generator-button" onClick={handleLinkGenClick}>GENERATE LINK</button>
            </div>


            <div className="output-section">
                <h3>Final Link:</h3>
                <TextareaAutosize rows="5" className="link-text-area" ref={FinalLinkRef} value={finalLink} onChange={onChangeLink}/>

                {
                /* Logical shortcut for only displaying the 
                    button if the copy command exists */
                document.queryCommandSupported('copy') &&
                    (
                        <>
                        <button className="generator-button" onClick={copyToClipboard}>Copy Link</button>
                        <h4 className="copy-success">{copySuccess}</h4>
                        </>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default LinkGenerator;