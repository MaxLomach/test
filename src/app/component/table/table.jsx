import React from 'react'
import TableBody from './tableBody'
import TableHeader from './tableHeader'

const Table = (props) => {
  return (
    <table className='table table-bordered table-hover bg-success bg-opacity-25 my-2'>
      <thead className='text-center bg-success bg-opacity-50'>
        <TableHeader />
      </thead>
      <tbody className='text-center'>
        <TableBody {...props} />
      </tbody>
    </table>
  )
}

export default Table
