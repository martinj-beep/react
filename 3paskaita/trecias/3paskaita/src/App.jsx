import { useState } from 'react'
import './App.css'

function App() {
  
  // 1  const [getColor, setColor] = useState("white")
  // 2 const [letter, setLett] = useState("#")
  const [getImg, setImg] = useState("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCocql81LsO4vFe3K4ku7QCfZG3Dts6CiISljbThc7-MJ5hW2q")

  // 1  function changeColor() {
  //   setColor(getColor)
  // }

// 2  function getRandomLetter() {
//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const randomIndex = Math.floor(Math.random() * alphabet.length);
//     setLett(alphabet[randomIndex]);
// }

  function showDog() {
    setImg("https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg")
  }

  function showCat() {
    setImg("https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg")
  }


  return (
    <>
    {/* 1   <div className='box' style={{backgroundColor: getColor}}></div>
    <button onClick={() => setColor("red")}>red</button>
    <button onClick={() => setColor("yellow")}>yellow</button>
    <button onClick={() => setColor("blue")}>blue</button></> */}
    
    {/* 2 <div className='box'>{letter}</div>
    <button onClick={getRandomLetter}>Random letter</button> */}


    <img src={getImg} alt="" />
    <button onClick={showDog}>show dog</button>
    <button onClick={showCat}>show cat</button>
    </>
  )
}


export default App
