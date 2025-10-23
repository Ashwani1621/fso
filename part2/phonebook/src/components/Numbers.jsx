import Person from "./Person"

const Numbers = ({persons, handleDelete}) => {
  return (
    <div>
        {persons.map((person) => {

          return (
            <Person 
            key = {person.id} 
            name={person.name} 
            phone={person.number}
            deleteContact={()=> handleDelete(person.id)}
            />
          )})
        }
    </div>
  )
}

export default Numbers