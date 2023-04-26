import React from 'react'
import "./06-digital-clock-application2.scss"
import moment from 'moment';

const DigitalClockApplication2 = (props) => {
    const dateTime = moment();
        
    // console.log(dateTime);
    const dateStr = dateTime.format("LL");
    const timeStr = dateTime.format("HH:mm:ss");  
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");
    // console.log(hour);
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

    return (
        <div style={clockStyle} className='digital-clock-app2-container'>
            <div className='time'>{timeStr}</div>
            <div>
                <div className='date'>{dateStr}</div>
                <div className='day'>{dayStr} {message}</div>
            </div>
        </div>
    )
}

export default DigitalClockApplication2