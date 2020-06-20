
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home'
export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>

)
