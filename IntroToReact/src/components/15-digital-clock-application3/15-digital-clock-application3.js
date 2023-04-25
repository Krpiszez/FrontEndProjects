import React, { useEffect, useState } from 'react'
import "./15-digital-clock-application3.scss"
import moment from 'moment';

const DigitalClockApplication3 = (props) => {
    const[dateTime, setDateTime] = useState(moment());
    
    const dateStr = dateTime.format("LL");
    const timeStr = dateTime.format("HH:mm:ss");  
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");
    const minute = dateTime.format("mm");
    const second = dateTime.format("ss");
    let message;

    if(hour >= 6 && hour < 11){
        message = "Morning";
    } else if (hour >=11 && hour < 14){
        message = "Noon";
    } else if (hour >=14 && hour < 17){
        message = "AfterNoon";
    } else if (hour >=17 && hour < 22){
        message = "Evening";
    } else {
        message = "Night";
    }

    const clockStyle = {
        color : props.textColor,
        backgroundColor : props.bgColor
    }

    useEffect (()=>{
        const timer = setInterval(()=>{
            setDateTime(moment());
        },1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div style={clockStyle} className='digital-clock-app3-container'>
            <div className='time'>{hour}
            <span style={{opacity:second%2==0 ? 1 : 0}}>:</span>
            {minute}
            {/* <span style={{opacity:second%2==0 ? 1 : 0}}>:</span>
            {second} */}
            </div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr} {message}</div>
            </div>
        </div>
    )
}

export default DigitalClockApplication3