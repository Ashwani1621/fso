const Total = ({parts}) =>{
const sum  = parts.map((part)=> part.exercises).reduce((prev, curr)=> prev + curr, 0)
return(
    <div>
        <p style={{fontWeight: "bold"}}>total of {sum} exercises</p>
    </div>
)
}

export default Total