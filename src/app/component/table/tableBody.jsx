import React from 'react'
import Detailed from '../../component/page/datailedPage/detailed'
import BookMark from '../ui/bookMark'
import { Link, Switch, Route } from 'react-router-dom'

const TableBody = ({ commentsA, handleNewState }) => {
  const tBody = commentsA.map((item) => {
    return (
      <>
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            <BookMark
              onToggle={() => {
                handleNewState(item)
              }}
              item={item}
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
