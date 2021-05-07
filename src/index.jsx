import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './styles/style.css'
import AppProvider from './provider/AppProvider'

ReactDOM.render(
    <AppProvider>
      <App />
    </AppProvider>,
  document.getElementById('root')
);
