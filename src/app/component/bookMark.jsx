import React from 'react'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const BookMark = ({ onToggle }) => {
  const Switch = (state) => {
    return state === 'false' ? 'bi bi-toggle-on' : 'bi bi-toggle-off'
  }

  return (
    <button className='btn' onClick={onToggle}>
      <i className={Switch(localStorage.getItem('Switch'))}></i>
    </button>
  )
}

export default BookMark
