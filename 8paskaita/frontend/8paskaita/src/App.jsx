import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import TodosContainer from './components/TodosContainer/TodosContainer'
import TodosForm from './components/TodosForm/TodosForm'

function App() {
  const [todos, setTodos] = useState([])

  const API_URL = import.meta.env.VITE_API_URL; // issimsim is env failo tai ka norim

  useEffect(() => { // negalima naudoti async funkcionalumo, todel daznai naudojam then ir catch
    axios.get(`${API_URL}/todo`).then((response) => {
        setTodos(response.data)
    
    })
    .catch((error) => console.log(error)) // axios requestas, sugeneruos promisa kaip fetch
  }, [])

  return (
    <div>
      <TodosContainer setTodos={setTodos} todos={todos} />
      <TodosForm setTodos={setTodos}/>
    </div>
  )
}

export default App
