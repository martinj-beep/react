import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [test, setTest] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        setTest(response.data)
    
    })
    .catch((error) => console.log(error))
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
