import React, { useEffect, useState } from 'react'
import { useParams, Link, Route, Switch } from 'react-router-dom'
import AllComments from './comments'
import Splashscreen from './splashscreen'
import Table from './table/table'

const Detailed = () => {
  const params = useParams()
  const { id } = params
  const [commentsById, setCommentsById] = useState()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setCommentsById(result)
      })
  }, [])

  return commentsById ? (
    <>
      <div class='card bg-success bg-opacity-50'>
        <div class='card-body'>
          <h5 class='card-title text-center'>{commentsById.name}</h5>
          <p class='card-text'>
            Email:
            <span className='bold-style-for-card-text'>
              {commentsById.email}
            </span>{' '}
          </p>
          <p class='card-text'>
            Post Id:
            <span className='bold-style-for-card-text'>
              {commentsById.postId}
            </span>{' '}
          </p>
          <p class='card-text'>
            Id:
            <span className='bold-style-for-card-text'>
              {commentsById.id}
            </span>{' '}
          </p>
          <p class='card-text'>
            Body:
            <span className='bold-style-for-card-text'>
              {commentsById.body}
            </span>{' '}
          </p>
          <div class='d-grid'>
            <Link type='button' className='btn btn-success ' to='/'>
              All Comments
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route path='/comments' component={AllComments} />
      </Switch>
    </>
  ) : (
    <Splashscreen />
  )
}

export default Detailed
