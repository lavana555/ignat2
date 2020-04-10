import React from 'react';
import s from './Modal.module.css';


const ModalChild = (props) =>{


    const onCloseModal =()=>{
       props.modalDisplayAC(false)
    };

        return (
            <div className={s.child}>
                <div className={s.content}>{props.content}

                    <button onClick={onCloseModal}>close</button></div>

            </div>
        );
    };


export default ModalChild;
