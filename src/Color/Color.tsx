import React, {FC, useState} from 'react';


const Color: FC<any> = (props) => {
    const [color, setColor] = useState('#212bde');
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <input type={"color"} value={color} onChange={e => setColor(e.currentTarget.value)}/>
            <div style={{height: "100px", width: "100px", backgroundColor: color}}/>
            <div style={{
                height: '200px',
                width: '500px',
                background: 'linear-gradient(90deg,#000000, #EECFBA, #C5DDE8, #00ff00 )'
            }}/>
        </div>
    );
}

export default Color