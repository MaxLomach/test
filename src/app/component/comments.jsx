import React, { useEffect, useState } from 'react'
import '../../index.css'
import Splashscreen from './splashscreen'
import Search from './search'
import Table from './table/table'
import Pagination from './pagination'
import { paginate } from '../paginate'

const AllComments = () => {
  const [error, setError] = useState(null)
  const [commentsA, setCommentsA] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchElement, setSearchElement] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 20

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setCommentsA(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  const handlSearch = (item) => {
    const searchEmail = commentsA.filter(
      (comment) =>
        comment.email.toLowerCase().indexOf(item) !== -1 ||
        comment.email.indexOf(item) !== -1
    )
    setSearchElement(searchEmail)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const newState = (item) => {
    const newBookmark = commentsA.map((element) => {
      if (element.id === item.id) {
        if (localStorage.getItem('Switch') === 'true') {
          localStorage.setItem('Switch', 'false')
        } else {
          localStorage.setItem('Switch', 'true')
        }
      }
      return element
    })

    return setCommentsA(newBookmark)
  }

  if (commentsA) {
    const elem = searchElement ? searchElement : commentsA
    const count = elem.length
    // const sortedUsers = _.orderBy(elem, [sortBy.path], [sortBy.order])
    const crop = paginate(elem, currentPage, pageSize)

    if (error) {
      return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
      return <Splashscreen />
    } else {
      return (
        <>
          <Search onSearch={handlSearch} />
          <Table commentsA={crop} newState={newState} />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )
    }
  }
}

export default AllComments
