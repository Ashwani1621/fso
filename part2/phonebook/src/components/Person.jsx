
const Person = ({name, phone, deleteContact}) =>  {
    
    return (
    <>
        <div>
            {name} {phone} 
        <button onClick={deleteContact}>delete</button>
        </div>
   
    </>
    )}

export default Person