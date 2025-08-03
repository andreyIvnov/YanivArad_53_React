import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux'
import productReducer from './HW/HW_08_Redux/RootReducer.js'

const store = createStore(productReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
