import React from 'react';
import s from './Modal.module.css';


const MessageModal = (props) => {


    return (
        <div className={s.movingContainer}>
            <div id='message' className={s.movingContent}>message</div>

        </div>
    );
};


export default MessageModal;
