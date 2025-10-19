const Filter = (props) => {
    return (
        <div>
            filter shown with : <input type="text" value={props.filter} onChange={props.handleFilter} required/>
        </div>
    )
}
export default Filter