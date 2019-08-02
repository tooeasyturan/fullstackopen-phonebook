import React, { useState } from 'react'
import PersonForm from './components/PersonForm';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleChangeName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    //console.log(event.target.value)
    setFilter(event.target.value)
  }

  const filtered = persons.filter(person => {
    return person.name.toUpperCase().includes(filter.toUpperCase())
  })

  console.log(filtered)


  // const personsName = () => {
  //   return (
  //     persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)
  //   )
  // }


  const filteredName = () => {
    return (
      filtered.map(filteredName => <p>{filteredName.name} {filteredName.number}</p>)
    )
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with <input onChange={handleFilter} value={filter} />
      </div>
      <h2>Add New</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <h2>Numbers</h2>
      {filteredName()}
    </div>
  )
}

export default App
