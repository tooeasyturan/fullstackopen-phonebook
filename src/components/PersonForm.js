import React from 'react'
import PersonService from '../services/persons'


const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, handleChangeName, handleChangeNumber }) => {
  const addPerson = (event) => {
    event.preventDefault()

    // Check to see if name exists, if not add name
    if (persons.find(person => person.name === newName)) {
      const person = persons.find(person => person.name === newName)
      window.confirm(`${person.name} is already added to the phonebook. Replace the old number with a new one?`)
      const changedNumber = { ...person, number: newNumber }
      const id = person.id

      PersonService.update(id, changedNumber)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })


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