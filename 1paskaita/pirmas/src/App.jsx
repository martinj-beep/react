import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App() {
  const name = "kakalas";

  function handleClick() {
    console.log("Labas is react");
  }

  return (
      <div>
        <h1>{name}</h1>
        <button onClick={handleClick}>Click me</button> 
        {/* padarys kad suveiktu funkcija paspaudimo metu */}<Header />
        {/* susiimportuojam komponenta */}
        <Body />
      </div>
  )
}

export default App
