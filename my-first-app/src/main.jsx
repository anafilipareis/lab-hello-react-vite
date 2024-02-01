import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// src/main.jsx file is the one where the main render call is happening thanks to the root.render() method. The method root.render() injects the React application into the <div id='root'> so that the app can be rendered in the browser.