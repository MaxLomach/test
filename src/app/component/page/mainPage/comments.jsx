import React, { useEffect, useState } from 'react'
import Splashscreen from '../../ui/splashscreen'
import Search from '../../search'
import Table from '../../table/table'
import Pagination from '../../pagination'
import { paginate } from '../../../utils/paginate'

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
          setTimeout(() => {
            setIsLoaded(false)
            setIsLoaded(true)
            setCommentsA(result)
          }, 2000)
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

  const handleNewState = (item) => {
    const arr = commentsA.map((elem) => {
      if (elem.id === item.id) {
        elem.state ? (elem.state = false) : (elem.state = true)
      }
      return elem
    })
    return setCommentsA(arr)
  }

  if (commentsA) {
    const elem = searchElement ? searchElement : commentsA
    const count = elem.length
    const crop = paginate(elem, currentPage, pageSize)

    if (error) {
      return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
      return <Splashscreen />
    } else {
      return (
        <>
          <Search onSearch={handlSearch} />
          <Table commentsA={crop} handleNewState={handleNewState} />
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
