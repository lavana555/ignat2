import React, {useState} from 'react';
import s from './Modal.module.css';

 const QuestionModal = (props) =>{

     const onYes =()=>{
         props.changeAnswer('yes')
         props.modalDisplayAC(false)
     };
     const onNo =()=>{
         props.changeAnswer('no')
         props.modalDisplayAC(false)
     };

    return (
        <div className={s.child}>
            <div className={s.content}>{props.content}
                question Modal
                <button onClick={onYes}>yes</button>
                <button onClick={onNo}>no</button></div>

        </div>
    );
};


export default QuestionModal;
