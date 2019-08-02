import React, { useState } from 'react'


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')

  const handleChangeName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(personsObject))
    setNewName('')

  }

  const personsName = () => {
    return (
      persons.map(person => <p id={person.id}>{person.name}</p>)
    )
  }

  console.log('personName', personsName())

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {personsName()}

    </div>
  )
}

export default App
