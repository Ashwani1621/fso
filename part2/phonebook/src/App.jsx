import { useState } from 'react'


const Number = ({persons}) => {
  return (
      persons.map((person)=> <div key={person.id}>{person.name}</div>)
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    
  ]) 
  const [newName, setNewName] = useState('')

  const addNumber = (event) =>{
    event.preventDefault()
    const personObj = {
      name: newName,
      id: String(persons.length + 1)
    }
    console.log()
    setPersons(persons.concat(personObj))
    setNewName('')
  }
  const handleInput = (event) => {setNewName(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Number persons = {persons}/>
    </div>
  )
}

export default App