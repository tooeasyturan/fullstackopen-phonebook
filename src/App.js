import React, { useState } from 'react'


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 }
  ])

  const [newName, setNewName] = useState('')

  const handleChangeName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }



  const addName = (event) => {
    event.preventDefault()

    // Check to see if name exists, if not add name
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personsObject = {
        name: newName,
        id: persons.length + 1
      }
      setPersons(persons.concat(personsObject))
      setNewName('')
    }
  }



  const personsName = () => {
    return (
      persons.map(person => <p key={person.id}>{person.name}</p>)
    )
  }


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
