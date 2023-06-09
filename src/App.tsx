import { useState } from "react"

function App() {
  const [day, setDay] = useState("--")
  const [month, setMonth] = useState("--")
  const [year, setYear] = useState("--")
  const [dayError, setDayError] = useState("Not filled")
  const [monthError, setMonthError] = useState("Not filled")
  const [yearError, setYearError] = useState("Not filled")
  return (
    <div className="main">
      <div className="top">
        <div className="day">
          <label htmlFor="day">DAY</label>
          <input autoComplete="off" placeholder="DD" type="number" name="day" min="1" max="31"/>
          <p className="error">{dayError}</p>
        </div>
        <div className="month">
          <label htmlFor="month">MONTH</label>
          <input autoComplete="off" placeholder="MM" type="number" name="month" min="1" max="12"/>
          <p className="error">{monthError}</p>
        </div>
        <div className="year">
          <label htmlFor="year">YEAR</label>
          <input autoComplete="off" placeholder="YYYY" type="number" name="year" min="1" max="2023"/>  
          <p className="error">{yearError}</p>        
        </div>
      </div>
      <div className="middle">
        <div className="hr"></div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </button>
      </div>
      <div className="bottom">
        <p><span>{year}</span> years</p>
        <p><span>{month}</span> months</p>
        <p><span>{day}</span> days</p>
      </div>
    </div>
  )
}

export default App
