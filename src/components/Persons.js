import React from 'react'
import Person from './Person'

const Persons = ({ persons, filtered, deletePerson }) => {
  const showFiltered = persons.filter(person => {
    return person.name.toUpperCase().includes(filtered.toUpperCase())
  })

  console.log(showFiltered)

  // const filteredName = () => {
  //   return (
  //     showFiltered.map(filteredName => <p >{filteredName.name} {filteredName.number}</p>)
  //   )
  // }

  const rows = () => {
    return (
      showFiltered.map(person =>
        <Person key={person.id} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id)} />
      )
    )
  }

  return (
    <>
      {rows()}
    </>
  )
}

export default Persons