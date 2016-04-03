
import React, { Component } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from '../reducers'
import App from '../components/App'

const createStoreWithMiddlewares = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddlewares(reducer)

class Main extends Component {

  render () {
  
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Main
