import { useState } from "react"

function App() {
  const [enteredDay, setEnteredDay] = useState("")
  const [enteredMonth, setEnteredMonth] = useState("")
  const [enteredYear, setEnteredYear] = useState("")
  const [day, setDay] = useState("--")
  const [month, setMonth] = useState("--")
  const [year, setYear] = useState("--")
  const [dayError, setDayError] = useState("")
  const [monthError, setMonthError] = useState("")
  const [yearError, setYearError] = useState("")
  const checkDay = () => {
    if (enteredDay === "") {
      setDayError("This field is required")
      setDay("--")
      setMonth("--")
      setYear("--")
      return true
    }
    else if (parseInt(enteredDay) > 31 || parseInt(enteredDay) < 1) {
      setDayError("Must be a valid day")
      setDay("--")
      setMonth("--")
      setYear("--")
      return true
    }
    else {
      setDayError("")
      return false
    }
  }
  const checkMonth = () => {
    if (enteredMonth === "") {
      setMonthError("This field is required")
      setDay("--")
      setMonth("--")
      setYear("--")
      return true
    }
    else if (parseInt(enteredMonth) > 12 || parseInt(enteredMonth) < 1) {
      setMonthError("Must be a valid month")
      setDay("--")
      setMonth("--")
      setYear("--")
      return true
    }
    else {
      setMonthError("")
      return false
    }
  }
  const checkYear = () => {
    if (enteredYear === "") {
      setYearError("This field is required")
      setDay("--")
      setMonth("--")
      setYear("--")
      return true
    }
    else {
      setYearError("")
      return false
    }
  }
  const submit = () => {
    checkDay()
    checkMonth()
    checkYear()
    if (!checkDay() && !checkMonth() && !checkYear()) {
      console.log("ok")
      var currentDate = new Date()
      var enteredDate = new Date(parseInt(enteredYear), parseInt(enteredMonth) - 1, parseInt(enteredDay))
      var totalDay = (currentDate.getTime() - enteredDate.getTime()) / (1000 * 60 * 60 * 24)
      var year = Math.floor((totalDay / 365))
      var month = Math.floor(((totalDay - year*365) / 30))
      var day = Math.floor(((totalDay - year*365 - month*30)))
      setYear(year.toString())
      setMonth(month.toString())
      setDay(day.toString())
    }
  }
  
  return (
    <div className="main">
      <div className="top">
        <div className="day">
          <label htmlFor="dayInput" style={dayError != "" ? {color: "hsl(0, 100%, 67%)"} : {}}>DAY</label>
          <input id="dayInput" style={dayError != "" ? {border:" 0.5px solid hsl(0, 100%, 67%)"} : {}} autoComplete="off" placeholder="DD" type="number" onChange={e => setEnteredDay(e.target.value)}/>
          <p className="error">{dayError}</p>
        </div>
        <div className="month">
          <label htmlFor="monthInput" style={monthError != "" ? {color: "hsl(0, 100%, 67%)"} : {}}>MONTH</label>
          <input id="monthInput" style={monthError != "" ? {border:" 0.5px solid hsl(0, 100%, 67%)"} : {}} autoComplete="off" placeholder="MM" type="number" onChange={e => setEnteredMonth(e.target.value)}/>
          <p className="error">{monthError}</p>
        </div>
        <div className="year">
          <label htmlFor="yearInput" style={yearError != "" ? {color: "hsl(0, 100%, 67%)"} : {}}>YEAR</label>
          <input id="yearInput" style={yearError != "" ? {border:" 0.5px solid hsl(0, 100%, 67%)"} : {}} autoComplete="off" placeholder="YYYY" type="number" onChange={e => setEnteredYear(e.target.value)}/>  
          <p className="error">{yearError}</p>        
        </div>
      </div>
      <div className="middle">
        <div className="hr"></div>
        <button onClick={submit}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
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
