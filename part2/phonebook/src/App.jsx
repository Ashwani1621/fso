import { useEffect, useState } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const sampleData = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter , setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  
  const hook = () =>{
    axios.get('http://localhost:3001/persons')
    .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
    })
  }
  useEffect(hook, [])

  // Event Listeners
  const addNumber = (event) =>{
    event.preventDefault()

    
    const foundName = persons.map((person)=> person.name).includes(newName)
    const foundPhone = persons.map((person)=> person.phone).includes(newPhone)
    if(foundName){
      return alert(`${newName} already exists` )
    }
    if(foundPhone){
      return alert(`${newPhone} already exists` )
    }
    
    const personObj = {
      id: String(persons.length + 1),
      name: newName,
      number: newPhone
    }
    
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
      <h3>phonebook</h3>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h3>add new</h3>
      <PersonForm filter={filter} handleFilter={handleFilter} addNumber={addNumber} newName={newName} handleName={handleName} newPhone={newPhone} handlePhone={handlePhone} />
      <h3>Numbers</h3>
      <Numbers persons = {filter ? filteredPersons: persons}/>
      
    </div>
  )
}

export default App