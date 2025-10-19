const Form = (props) => {
    return (
        <>
            <h2>Add new</h2>
            <div>
                filter shown with : <input type="text" value={props.filter} onChange={props.handleFilter} required/>
            </div>
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

export default Form