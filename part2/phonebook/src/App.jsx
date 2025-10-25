import { useEffect, useState } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import phoneService from './services/phonebook'
import Notification from './components/Notification'
const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter , setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  const [notification, setNotification] = useState(null)

  const hook = () =>{
    phoneService.getContacts()
      .then(persons => setPersons(persons))
        
    }
  
  useEffect(hook, [])

  // Event Listeners
  const addNumber = (event) =>{
    event.preventDefault()

    const foundName = persons.find((person)=> person.name === newName)
    const foundPhone = persons.find((person)=> person.number === newPhone)
    
    if(foundName){
      if(confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const personObj = {
          name: newName,
          number: newPhone
        }
        phoneService
          .updateContact(foundName.id, personObj)
          .then(updatedPerson => {
            console.log(updatedPerson)
            setPersons(persons.map((person)=> person.id === foundName.id ? updatedPerson : person))
            setNotification(`Contact Updated : ${updatedPerson.name}`)
            setTimeout(() => {
              setNotification(null)}, 5000)
            setNewName('')
            setNewPhone('')
          })
          .catch((err) => {
            console.log("Error updating contact", err)
          })
      }
      return
    }

    if(foundPhone){
      alert(`Phone number ${newPhone} is already added to phonebook`)
      return
    }
    
    const personObj = {
      name: newName,
      number: newPhone
    }
    phoneService
      .addContacts(personObj)
      .then(newPerson=> {
        setPersons(persons.concat(newPerson))
        setNotification(`New Contact Added : ${newPerson.name}`)
        setTimeout(() => {
          setNotification(null)}, 5000)
        setNewName('')
        setNewPhone('')
      })
      .catch((err) => {
        console.log("Error adding contact", err)
      })
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
      <Notification message={notification}/>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h3>add new</h3>
      <PersonForm filter={filter} handleFilter={handleFilter} addNumber={addNumber} newName={newName} handleName={handleName} newPhone={newPhone} handlePhone={handlePhone} />
      <h3>Numbers</h3>
      <Numbers persons = {filter ? filteredPersons: persons} handleDelete={handleDelete}/>
      
    </div>
  )
}

export default App