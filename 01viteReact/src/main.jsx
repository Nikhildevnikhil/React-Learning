import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Chai with react</h1>
    </div>
  )
}
// const ReactElement = {
//   type : 'a',
//   props : {
//       href : 'https://www.google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }
const anotherElement = (
  <a href="www.google.com" target="_blank">Visit Google</a>
)
const anotherUser = "Nikhil Deo"
const ReactElement = React.createElement(
  'a',
  {href : 'www.google.com', target : '_blank'},
  'Visit Google',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    
    ReactElement
    
  
)
