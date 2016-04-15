import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/lib/createBrowserHistory'
import store from '../store'

import App from './App'
import ItemList from './ItemList'
import './main.scss'


// opt-out of ugly hack for history in older browsers
const history = createHistory({
  queryKey: false,
})


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ItemList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
