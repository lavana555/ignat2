
import React, {useState} from 'react';
import s from './Modal.module.css';

const UpPage = (props) =>{

   const[isVisible, setVisible] = useState(false)

    const arrowTop = () => {
        window.scrollTo(window.pageXOffset, 0)
        setTimeout(() =>{setVisible(false)}, 50)
   };

    const handleScroll = () =>{
       if(window.pageYOffset < document.documentElement.clientHeight){
           setVisible(true)
       }
    };


    window.addEventListener('scroll', handleScroll);

    return (
        <div className={isVisible ? s.pageUp : s.hidePageUp} onClick={arrowTop}>
            Up
        </div>
    );
};


export default UpPage;

