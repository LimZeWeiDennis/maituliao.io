import React , {useState} from "react";
import "./Prototyping.css";
import Modal from 'react-modal';

const ExpandableImage = props => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div onClick={handleOpen}>
            <img className="carouselImage"
                 src={props.src}
                 onClick={handleOpen}
                 draggable={false}
                 alt="no image"
            />
            <Modal
                className="dialog"
                isOpen={isOpen}

            >
                <img
                    className="expandedImage"
                    src={props.src}
                    onClick={handleOpen}
                    alt="no image"
                    draggable={false}
                />
            </Modal>

        </div>
    );

}

export default ExpandableImage;