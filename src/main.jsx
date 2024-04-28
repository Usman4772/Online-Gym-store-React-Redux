import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextWrapper from './context/index.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <GlobalContextWrapper>
  <Provider store={store}>
    <App />
    </Provider>
    </GlobalContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
