import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { legacy_createStore } from "redux"
import { Provider } from "react-redux"
import appReducer from './redux/appReducer.js'
const store = legacy_createStore(appReducer)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />
  </Provider>
)
