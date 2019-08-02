import React from 'react'

const Filter = ({ filtered, handleFilter }) => {
  return (
    <div>
      Filter shown with <input onChange={handleFilter} value={filtered} />
    </div>
  )
}

export default Filter

// const filtered = () => persons.filter(person => {
//   return person.name.toUpperCase().includes(filtered.toUpperCase())
// })