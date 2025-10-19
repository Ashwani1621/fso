import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addNumber = (event) =>{
    event.preventDefault()

    // Check if name already exists
    const foundName = persons.map((person)=> person.name).includes(newName)
    const foundPhone = persons.map((person)=> person.phone).includes(newPhone)
    if(foundName){
      return alert(`${newName} already exists` )
    }
    if(foundPhone){
      return alert(`${newPhone} already exists` )
    }
    // Add unique person object
    const personObj = {
      id: String(persons.length + 1),
      name: newName,
      phone: newPhone
    }
    // Add person
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewPhone('')
  }
  const handleName = (event) => {setNewName(event.target.value)}
  const handlePhone = (event) => {setNewPhone(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleName} required/><br />
          number: <input type="tel" value={newPhone} onChange={handlePhone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
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