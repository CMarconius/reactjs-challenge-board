import React, { useState } from 'react'
import { Button } from '../../../Button';
import './SortQuick.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function SortQuick() {

    const [startArray, setStartArray] = useState([5, 11, 23, 8, 65, 2, 6]);
    const [sortedArray, setSortedArray] = useState([]);

    const [pivot, setPivot] = useState(startArray[(startArray.length - 1)]);
    const [leftArray, setLeftArray] = useState([]);
    const [rightArray, setRightArray] = useState([]);

    const images = [
        'images/profile_pic_1.jpg',
        'images/profile_pic_2.jpg',
        'images/profile_pic_3.jpg',
      ];
    
    var photoIndex = 0;
    const [isOpen, setIsOpen] = useState(false);

    const randomizeArray = () => {
        const newArray = [];

        for (var i = 0; i < 9; i++) {
            newArray.push(Math.floor(Math.random() * 100));
        }

        setStartArray(newArray);
        setSortedArray('...');

        setPivot(startArray[(startArray.length - 1)]);
    }

    return (
        <>
            <div className="quickSort">
                
                <button type="button" onClick={() => setIsOpen({ isOpen: true })}>
                    <img src={toString(images[0])} alt="" />
                </button>
                
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                )}
                
                
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
