import React, {FC, useEffect, useState} from 'react';
import moment from "moment"
import 'rc-time-picker/assets/index.css';


type PropsType = {}

const TimeTracker: FC<PropsType> = (props) => {

    let [time, setTime] = useState(moment());

    useEffect(() => {
        setInterval(()=> {
            setTime(moment())
        }, 4)
    }, []);


    return (
        <div>
                {time.format('HH:mm:ss')}
        </div>
    );
}

export default TimeTracker