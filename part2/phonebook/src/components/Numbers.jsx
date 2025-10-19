import Person from "./Person"

const Numbers = ({persons}) => {
  return (
    <div>
        {persons.map((person) => <Person key = {person.id} name={person.name} phone={person.number}/>)}
    </div>
  )
}

export default Numbers