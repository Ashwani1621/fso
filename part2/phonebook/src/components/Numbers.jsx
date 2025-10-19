import Number from "./Number"

const Numbers = ({persons}) => {

  
  return (
    
    <div>
        <h2>Numbers</h2>
        {persons.map((person) => <Number key = {person.id} name={person.name} phone={person.number}/>)}
    </div>
  )
}

export default Numbers