import Number from "./Number"

const Numbers = ({persons}) => {
  console.log(persons);
  
  return (
    
    <div>
        
        {persons.map((person) => <Number key = {person.id} name={person.name}/>)}
    </div>
  )
}

export default Numbers