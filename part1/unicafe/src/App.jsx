import { use, useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onclick}>{props.text}</button>
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = ({good, neutral, bad, all, avg, pos}) => {
  if(all===0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <h4>Statistics</h4>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text="Neutral" value={neutral}/>
          <StatisticLine text="Bad" value={bad}/>
          <StatisticLine text="Total" value={all}/>
          <StatisticLine text="Average" value={avg}/>
          <StatisticLine text="Positive" value={`${pos} %`}/>
        </tbody>
      </table>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(good+bad)
  
  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
}
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
}
  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
}
  return (
    <div>
      <h3>Give Feedback</h3>
      <Button onclick={handleGood} text="Good"/>
      <Button onclick={handleNeutral} text="Neutral"/>
      <Button onclick={handleBad} text="Bad"/>
      <br></br>
      <br></br>
      <Statistics 
        good={good}
        bad={bad} 
        neutral={neutral} 
        all={total} 
        avg={(good-bad)/total} 
        pos={good/total *100}/>
    </div>
  )
}

export default App