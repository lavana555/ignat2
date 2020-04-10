import React, {useState} from 'react';
import s from './Modal.module.css';

 const InputModal = (props) =>{
const[value1, setValues1] = useState(' tell me something');
const[value2, setValues2] = useState('');
const[value3, setValues3] = useState('');

     const on1InputChange = (e) =>{
         setValues1(e.currentTarget.value)
     };
     const on2InputChange = (e) =>{
         setValues2(e.currentTarget.value)
     };
     const on3InputChange = (e) =>{
         setValues3(e.currentTarget.value)
     };



     const onSubmit =()=>{
         props.modalDisplayAC(false)
         props.changeValue(value1+' '+value2+' '+value3)
     };


    return (
        <div className={s.child}>
            <div className={s.content}>{props.content}
                Input Modal
                <input onChange = {on1InputChange} type="text" value = {value1} />
                <input type="text" onChange = {on2InputChange} value = {value2}/>
                <input type="text"  onChange = {on3InputChange} value = {value3}/>
                <button onClick={onSubmit}>ok</button></div>

        </div>
    );
};


export default InputModal;
