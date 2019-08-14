import React from 'react'
import PersonService from '../services/persons'


const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, handleChangeName, handleChangeNumber }) => {
  const addPerson = (event) => {
    event.preventDefault()

    // Check to see if name exists, if not add name
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personsObject = {
        name: newName,

        number: newNumber
      }
      PersonService
        .create(personsObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }

  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
        <br />
        number: <input value={newNumber} onChange={handleChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm