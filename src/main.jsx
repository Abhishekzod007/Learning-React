import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom React App </h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
const anotherElement = (
  <a href='https://google.com' target="_blank"> Visit google</a>
)
const AnotherUser = 'Chai aur react'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  AnotherUser
)
createRoot(document.getElementById('root')).render(
   <App />
  
)
