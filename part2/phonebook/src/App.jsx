import { useEffect, useState } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import phoneService from './services/phonebook'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter , setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  
  const hook = () =>{
    phoneService.getContacts()
      .then(persons => setPersons(persons))
        
    }
  
  useEffect(hook, [])

  // Event Listeners
  const addNumber = (event) =>{
    event.preventDefault()

    
    const foundName = persons.map((person)=> person.name).includes(newName)
    const foundPhone = persons.map((person)=> person.number).includes(newPhone)
    if(foundName){
      return alert(`${newName} already exists` )
    }
    if(foundPhone){
      return alert(`${newPhone} already exists` )
    }
    
    const personObj = {
      name: newName,
      number: newPhone
    }
    phoneService
      .addContacts(personObj)
      .then(newPerson=> setPersons(persons.concat(newPerson)))
    
    setNewName('')
    setNewPhone('')
  }

  const handleDelete = (id) => {
    const person = persons.find((person)=> person.id===id)
    if(!confirm(`Delete ${person.name} ?`)){
      return;
    }
    phoneService
      .deleteContact(id)
      .then(deletedContact => {
        console.log(deletedContact)
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch((err)=>{
        console.log("Error deleting the contact", err)
      })
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
      <Numbers persons = {filter ? filteredPersons: persons} handleDelete={handleDelete}/>
      
    </div>
  )
}

export default App