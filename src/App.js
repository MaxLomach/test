import React from 'react'
import AllComments from './app/component/comments'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detailed from './app/component/detailed'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={AllComments} />
          <Route path='/detailed/:id?' component={Detailed} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
