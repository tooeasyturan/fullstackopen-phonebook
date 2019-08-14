import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState('')

  useEffect(() => {
    PersonService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])



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
    setFiltered(event.target.value)
  }

  const deletePerson = (id) => {
    PersonService.remove().then(returnedPersons => { setPersons(returnedPersons) })
  }



  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleFilter={handleFilter} filtered={filtered} />
      <h2>Add New</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} filtered={filtered} deletePerson={deletePerson} />
    </div>
  )
}

export default App
