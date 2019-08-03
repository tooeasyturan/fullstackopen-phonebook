import React from 'react'




const Persons = ({ persons, filtered }) => {
  const showFiltered = persons.filter(person => {
    return person.name.toUpperCase().includes(filtered.toUpperCase())
  })

  const filteredName = () => {
    return (
      showFiltered.map(filteredName => <p>{filteredName.name} {filteredName.number}</p>)
    )
  }

  return (
    <>
      {filteredName()}
    </>
  )
}

export default Persons