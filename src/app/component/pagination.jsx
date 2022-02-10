import React from 'react'
import _ from 'lodash'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)

  return (
    <nav>
      <ul className='pagination justify-content-center mt-3'>
        {pages.map((page) => (
          <li
            className={'page-item' + (page === currentPage ? ' active' : '')}
            key={'page_' + page}
          >
            <button
              className='bg-success bg-opacity-50 text-black page-link'
              onClick={() => {
                onPageChange(page)
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
