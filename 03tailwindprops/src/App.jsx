import Card from './components/card.jsx'
import './App.css'

function App() {
  const newObj = {
    name : "Nikhil",
    age : 27
  }
  let arr = [1,2,4,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-3 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="Chai or Code" objprop ={newObj} Arraynew={arr} btnText="Click Me"/>
      <Card usernmae="Nikhil" />
    </>
  )
}

export default App
