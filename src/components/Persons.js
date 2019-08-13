import React from 'react'

const Persons = ({ persons, filtered, deletePerson }) => {
  const showFiltered = persons.filter(person => {
    return person.name.toUpperCase().includes(filtered.toUpperCase())
  })

  console.log(showFiltered)

  const filteredName = () => {
    return (
      showFiltered.map(filteredName => <p >{filteredName.name} {filteredName.number} <button onClick={() => deletePerson(filteredName.id)}>delete</button></p>)
    )
  }

  return (
    <>
      {filteredName()}
    </>
  )
}

export default Persons