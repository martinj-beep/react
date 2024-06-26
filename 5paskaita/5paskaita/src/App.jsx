import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [data, setData] = useState(null)

useEffect(() => {
  
fetch("https://fakestoreapi.com/products")
.then(res => res.json)
.then(res => {
  setData(res)
  console.log(res);
})


}, [])


  return (
  
    <div>
      <div>
        {data.map((x, i) => <div>{x.username}</div>)}
      </div>
    </div>
   
  )
} susikurtti komponenta, ji pramapinti, ir nusiusti i ji duomenis is mapo

export default App
