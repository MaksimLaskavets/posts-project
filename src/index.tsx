import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import {store} from './redux/store'
import {Global} from './App.styles'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
