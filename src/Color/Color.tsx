import React, {FC, useState} from 'react';


const Color: FC<any> = (props) => {
    const [color, setColor] = useState('#212bde');
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <input type={"color"} value={color} onChange={e=>setColor(e.currentTarget.value)}/>
            <div style={{height:"100px", width:"100px", backgroundColor:color}}></div>
        </div>
    );
}

export default Color