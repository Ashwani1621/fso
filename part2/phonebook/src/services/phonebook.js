import axios from "axios"
const baseURL = 'http://localhost:3001/persons'

const getContacts = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
        
}

const addContacts = (obj) => {
    const request = axios.post(baseURL, obj)
    return request.then(response => response.data)

}

const deleteContact = (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}

export default  {
    addContacts, getContacts, deleteContact
}