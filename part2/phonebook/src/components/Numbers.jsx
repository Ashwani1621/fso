import Number from "./Number"

const Numbers = ({persons}) => {

  
  return (
    
    <div>
        
        {persons.map((person) => <Number key = {person.id} name={person.name} phone={person.phone}/>)}
    </div>
  )
}

export default Numbers