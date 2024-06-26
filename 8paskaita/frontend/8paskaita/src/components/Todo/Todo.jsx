import { useState } from "react"
import styles from "./Todo.module.css"
import axios from "axios";
import DisplayInput from "../DIsplayInput/DisplayInput";

export default function Todo({ todo, setTodos }) {
  const [todoCompleted, setTodoCompleted] = useState(todo.completed);

  const API_URL = import.meta.env.VITE_API_URL;
  function handleCheckbox(e) {
      setTodoCompleted(e.target.checked);

      const requestBody = {
        completed: e.target.checked,
      };
  
      axios
      .put(`${API_URL}/todo/${todo._id}`, requestBody)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err.message))
    }

    function handleDelete() {
      axios
      .delete(`${API_URL}/todo/${todo._id}`)
      .then((response) => {
        console.log(response);
        axios.get(`${API_URL}/todo`).then((resp) => {
          const todos = resp.data;
          setTodos(todos);
        })
      })
      .catch((err) => {
        console.log(err.message);
      })
    }

    async function handleUpdate(value, fieldName) {

      const requestBody = {
        [fieldName]: value
      }

      const bd = {
        body: value
      }

      await axios.put(`${API_URL}/todo/${todo._id}`)
    }

  return (
    <div className={styles.card}>{todo.title}
        <DisplayInput text={todo.title} value={todo.value} handleBlur={(value) => handleUpdate(value, "title")}/>
        <DisplayInput text={`Date created: ${todo.dateCreated.split("T")[0]}`}/>
        <DisplayInput text={todo.body}/>
        <DisplayInput text={`Deadline: ${todo.deadline.split("T")[0]}`}/>
        <input 
          type="checkbox" onChange={handleCheckbox} checked={todoCompleted}/>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
