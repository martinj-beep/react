import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input';

function App() {

  function handleClickButton1() {
    console.log("as esu pirmas mygtukas");
  }

  function handleClickButtonOther() {
    console.log("paspaustas ne pirmas mygtukas");
  }

  return (
    <div>
      <Button text={"mygtukas 1"} onCLick={handleClickButton1}/>
      <Button text={"mygtukas 2"} onCLick={handleClickButtonOther}/>
      <Button text={"mygtukas 3"} onCLick={handleClickButtonOther}/>
      <Input id={"pirmasInput"} label={"name"} onChange={(e) => {
        console.log(e.target.value);
      }} type={"number"} bigFont={true}/>
      <Input id={"date"} label={"Data"} type={"date"} onChange={(e) => {console.log(e.target.value)}}/>
    </div>
  )
}

export default App
