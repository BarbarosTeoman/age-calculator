import { useState } from "react"

function App() {
  const [day, setDay] = useState("--")
  const [month, setMonth] = useState("--")
  const [year, setYear] = useState("--")
  {/* <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>  */}
  return (
    <div className="main">
      <div className="top">
        <div className="day">
          <label htmlFor="day">DAY</label>
          <input placeholder="DD" type="number" name="day" min="1" max="31"/>
        </div>
        <div className="month">
          <label htmlFor="month">MONTH</label>
          <input placeholder="MM" type="number" name="month" min="1" max="12"/>
        </div>
        <div className="year">
          <label htmlFor="year">YEAR</label>
          <input placeholder="YYYY" type="number" name="year" min="1" max="2023"/>          
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
