import React, {useState, useEffect} from "react";
import "./ExpandableImage.css";
import Modal from 'react-modal';


const ExpandableImage = props => {

    const [isOpen, setIsOpen] = useState(false);
    const [isDragging, setDragging] = useState({x: 0, y: 0});
    const [isScroll, setScroll] = useState(0);



    //listens for mouse event during mouse down and stores the current mouse position into isDragging
    const dragControl = e => {
        setDragging({x: e.screenX, y:e.screenY});
        e.preventDefault();
    }

    //listens for a mouse event and records the current mouse position compared to prev
    const handleOpen = e => {
        if(isDragging.x === e.screenX && isDragging.y === e.screenY){
            setIsOpen(true);
            setScroll(window.scrollY);  // for potential scroll to close action
        }
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div>

            <div
                onMouseDown={dragControl}
                onClick={handleOpen}

            >
                <img className="carouselImage"
                     src={props.src}
                     draggable={false}
                     alt="no"
                />
            </div>
            {isOpen && <Modal
                className="modal"
                isOpen={isOpen}
                ariaHideApp={false}
                style={{overlay:{zIndex:100}}}
            >
                <img
                    className="expandedImage"
                    src={props.src}
                    onClick={handleClose}
                    alt="no"
                    draggable={false}
                />
            </Modal>}
        </div>
    );

}

export default ExpandableImage;