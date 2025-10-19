const PersonForm = (props) => {
    return (
        <>
            <form onSubmit={props.addNumber}>
                <div>
                    name: <input value={props.newName} onChange={props.handleName} required/><br />
                    number: <input type="tel" value={props.newPhone} onChange={props.handlePhone}  required/>
                </div>
                <div>
                    <button type="submit" >add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm