import React from 'react'
import TableBody from './tableBody'
import TableHeader from './tableHeader'

const Table = (props) => {
  return (
    <div className='container'>
      <table className='table text-success border-success  rounded-3 my-2'>
        <thead className='text-center '>
          <TableHeader />
        </thead>
        <tbody className='text-center'>
          <TableBody {...props} />
        </tbody>
      </table>
    </div>
  )
}

export default Table
