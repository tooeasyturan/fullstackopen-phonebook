import React, { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([

  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleChangeName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  const addName = (event) => {
    event.preventDefault()

    // Check to see if name exists, if not add name
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personsObject = {
        name: newName,
        id: persons.length + 1,
        number: newNumber
      }
      setPersons(persons.concat(personsObject))
      setNewName('')
      setNewNumber('')
    }
  }


  const personsName = () => {
    return (
      persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)
    )
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
          <br />
          number: <input value={newNumber} onChange={handleChangeNumber} />
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
