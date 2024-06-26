import { useState, useEffect, useRef } from 'react'
import './App.css'
import Timer from './components/Timer/Timer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  const [count, setCount] = useState(0) // praide reiksme 0
  const [showTimer, setShowTimer] = useState(true) // pradine reiksme yra true

  const persistantValue = useRef();

  useEffect(() => { // useEffect hookas
    console.log("count changed", count);
  }, [count]) // kiekviena karta pasikeitus count reiksmei, pasikeist useEffect reiksme. Galkima paduoti kelias reiksmes, tuomet kazkuriam vienetui pakitus, ivyks useEffect. Dependancy arejus vadinasi

  useEffect(() => { // use Effect galima tureti ne viena
    console.log("antras useEffect");

    return () => {

    }
  }, []) // uzsikraus useEffect pasileidus puslapiui, kuomet dependancy arejus tuscias

  function handleClick() {
    setCount((prev) => prev + 1) 
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <button onClick={() => persistantValue.current = 9}>cange useRef value</button>
      <button onClick={() => console.log(persistantValue.current)}>log persistant value</button>
      <button onClick={handleClick}>click me</button>
      <h1>{count}</h1>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle timer</button>
      {
        showTimer && <Timer /> 
      }
      <VideoPlayer />
    </div>
  )
}

export default App
