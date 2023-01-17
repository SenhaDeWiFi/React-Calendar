import './CalendarDate.css'
function CalendarDate(props) {
  return (
      <div>
        <button className ="date">{props.dayDate}</button>
      </div>
  )
}

export default CalendarDate