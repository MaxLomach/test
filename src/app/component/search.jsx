import React, { useState } from 'react'

const Search = ({ onSearch }) => {
  const [data, setData] = useState({ search: '' })

  const handlChange = ({ target }) => {
    setData({ [target.email]: target.value })
    onSearch(target.value)
  }

  return (
    <div className=' mx-auto my-4 w-50 '>
      <label className='form-label fw-bold' htmlFor='search'>
        Search by Email
      </label>
      <input
        id='#search'
        className='form-control mb-2'
        type='search'
        placeholder='Email'
        aria-label='Search'
        name='search'
        value={data.search}
        onChange={handlChange}
      />
    </div>
  )
}

export default Search
