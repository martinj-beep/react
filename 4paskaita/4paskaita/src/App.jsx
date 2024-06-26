import { useState } from 'react'
import './App.css'

function App() {
  const [cmpPoints, setCmpPoints] = useState(0)
  const [plrPoints, setPlrPoints] = useState(0)
  const [cpmSymbol, setCmpSymbol] = useState("")
  const [plrSymbol, setPlrSymbol] = useState("")
 

  return (
    <div>
        {/* <div>
        {emoji === '😂' ? (
          <span>😂</span>
        ) : emoji === '😭' ? (
          <span>😭</span>
        ) : (
          <span>💀</span>
        )}
      </div>
        <button onClick={() => setEmoji("😂")}>Happy</button>
        <button onClick={() => setEmoji("😭")}>Sad</button> */}

      {/* {num > 3 && <h1> YES MORE THAN 3 </h1>}

      {num === 4 ? <h2>YES IT IS 4</h2> : <h2> IT IS NOT 4</h2>} */}

    </div>
  )
}

export default App
