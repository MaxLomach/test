import React from 'react'
import Detailed from '../detailed'
import BookMark from '../bookMark'
import { Link, Switch, Route } from 'react-router-dom'

const TableBody = ({ commentsA, newState }) => {
  const tBody = commentsA.map((item) => {
    return (
      <>
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            <BookMark
              onToggle={() => {
                newState(item)
              }}
            />
          </td>
          <td>
            <button className='btn btn-success view-more'>
              <Link className='link-style' to={`detailed/${item.id}`}>
                view more
              </Link>
            </button>
          </td>
        </tr>
        <Switch>
          <Route path='/detailed' component={Detailed} />
        </Switch>
      </>
    )
  })
  return tBody
}

export default TableBody
