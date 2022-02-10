import React, { useEffect, useState } from 'react'
import { useParams, Link, Route, Switch } from 'react-router-dom'
import AllComments from '../mainPage/comments'
import Splashscreen from '../../ui/splashscreen'

const Detailed = () => {
  const params = useParams()
  const { id } = params
  const [commentsById, setCommentsById] = useState()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => {
          setCommentsById(result)
        }, 1000)
      })
  }, [])

  return commentsById ? (
    <>
      <div className='card bg-success bg-opacity-50'>
        <div className='card-body'>
          <h5 className='card-title text-center'>{commentsById.name}</h5>
          <p className='card-text'>
            Email:
            <span className='bold-style-for-card-text'>
              {' '}
              {commentsById.email}
            </span>
          </p>
          <p className='card-text'>
            Post Id:
            <span className='bold-style-for-card-text'>
              {' '}
              {commentsById.postId}
            </span>
          </p>
          <p className='card-text'>
            Id:
            <span className='bold-style-for-card-text'> {commentsById.id}</span>
          </p>
          <p className='card-text'>
            Body:
            <span className='bold-style-for-card-text'>
              {' '}
              {commentsById.body}
            </span>
          </p>
          <div className='d-grid'>
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
