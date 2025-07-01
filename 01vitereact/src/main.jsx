import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp () {
  return (
    <div>
      <h1>Custom app | chai</h1>
    </div>
  )
}

/* const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
},
  children: 'Click me to visit google'
} */

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = " | Rohit";

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click me to visit google ',
  anotherUser // knows as evaluated expression, direct inject variables
)

createRoot(document.getElementById('root')).render(
  <>
  {reactElement}
  <MyApp />
  <App />
  </>
)
