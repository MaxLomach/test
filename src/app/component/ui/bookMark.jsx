import React from 'react'

const BookMark = ({ onToggle, item }) => {
  const Switch = (state) => {
    return state === true
      ? 'text-info bi bi-toggle-on'
      : 'text-success bi bi-toggle-off'
  }

  return (
    <i role={'button'} onClick={onToggle} className={Switch(item.state)}></i>
  )
}

export default BookMark
