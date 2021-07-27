import React, { useState } from 'react'
import { Button } from '../../../Button';
import './SortQuick.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function SortQuick() {

    const [startArray, setStartArray] = useState([5, 11, 23, 8, 65, 2, 6]);
    const [sortedArray, setSortedArray] = useState([]);

    const [pivot, setPivot] = useState(startArray[(startArray.length - 1)]);
    const [leftArray, setLeftArray] = useState([]);
    const [rightArray, setRightArray] = useState([]);

    const images = 'images/QuickSortImages/profile_pic_1.jpg'
    

    const randomizeArray = () => {
        const newArray = [];

        for (var i = 0; i < 9; i++) {
            newArray.push(Math.floor(Math.random() * 100));
        }

        setStartArray(newArray);
        setSortedArray('...');

        setPivot(newArray[(newArray.length - 1)]);
    }

    return (
        <>
            <div className="quickSort">

                
                
                <Popup 
                    trigger={<img src={'images/QuickSortImages/profile_pic_1.jpg'} alt="" />} 
                    modal
                    nested>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        <div className="header"> Modal Title </div>
                        <div className="content">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                        </div>
                        <div className="actions">
                        
                        <button
                            className="button"
                            onClick={() => {
                            console.log('modal closed ');
                            close();
                            }}
                        >
                            close modal
                        </button>
                        </div>
                    </div>
                    )}
                </Popup>
                
                
                <Button onClick={randomizeArray} buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">Click to randomize array</Button>

                <div>Start Array: {startArray.toString()}</div>
                <div>Pivot: {pivot}</div>
                
                <Button buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">Sort Array</Button>
                <div>Sorted Array: {sortedArray.toString()}</div>
            </div>
        </>
    )
}

export default SortQuick
