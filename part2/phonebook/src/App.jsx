import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addNumber = (event) =>{
    event.preventDefault()

    // Check if name already exists
    const found = persons.map((person)=> person.name).includes(newName)
    if(found){
      return alert(`${newName} already exists` )
    }
    // Add unique person object
    const personObj = {
      name: newName,
      id: String(persons.length + 1)
    }
    // Add person
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
      <Numbers persons = {persons}/>
    </div>
  )
}

export default App