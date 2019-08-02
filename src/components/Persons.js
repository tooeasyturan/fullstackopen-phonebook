import React from 'react'


const Persons = () => {
  const filteredName = ({ filtered }) => {
    return (
      filtered.map(filteredName => <p>{filteredName.name} {filteredName.number}</p>)
    )


    return (
      { filteredName }
    )
  }
}

export default Persons