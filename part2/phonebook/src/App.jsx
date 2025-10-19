import { useState } from 'react'
import Numbers from './components/Numbers'
import { use } from 'react'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter , setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  console.log(filteredPersons)
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
      number: newPhone
    }
    // Add person
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewPhone('')
  }
  const handleName = (event) => {setNewName(event.target.value)}
  const handlePhone = (event) => {setNewPhone(event.target.value)}
  const handleFilter = (event) => {
    const value = event.target.value
    setFilter(value)
    setFilteredPersons(
      persons.filter((person) =>
        person.name.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Form filter={filter} handleFilter={handleFilter} addNumber={addNumber} newName={newName} handleName={handleName} newPhone={newPhone} handlePhone={handlePhone} />
      <Numbers persons = {filter ? filteredPersons: persons}/>
      
    </div>
  )
}

export default App