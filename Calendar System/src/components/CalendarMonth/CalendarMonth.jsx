import { useState } from "react";
import CalendarDate from "../CalendarDate/CalendarDate";
import './CalendarMonth.css'

function CalendarMonth(){

    const [dates, setDates] = useState([])

    
    for (let i = 1; i < 32; i++) {

        dates[i-1] = i
    }

    return(
        <div className="month">
            {dates.map(text => {
                return <CalendarDate dayDate = {text}/>
            })}
        </div>

    )
}

export default CalendarMonth