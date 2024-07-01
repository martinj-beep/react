import { useState } from 'react'
import './App.css'
import ConfirmModal from './components/ConfirmModal/ConfirmModal'
import Modal from './components/Modal/Modal'

function App() {
const [isModalOpen, setIsModalOpen] = useState(false)
const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)

function handleOpenModal() {
  setIsModalOpen(true)
}

function handleConfirm() {
  console.log("Confirmed");
  setIsModalOpen(false)
}

function handleCancel() {
  setIsModalOpen(false)
}

function handleOpenSecondModal() {
  setIsSecondModalOpen(true)
}

function handleSecondModalClose() {
  setIsSecondModalOpen(false)
}

  return (
    <div>
      <button onClick={handleOpenModal}>Open modal</button>
      <button onClick={handleOpenSecondModal}>Open Modal 2</button>
      {
        isModalOpen && <ConfirmModal onConfirm={handleConfirm} onCancel={handleCancel} text={"Ar tikrai norite kazka daryti?"}/>
      }
    <Modal open={isSecondModalOpen} handleClose={handleSecondModalClose}>
      <h1>Some text</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis quasi quos esse beatae vitae consequuntur cupiditate accusantium suscipit impedit reiciendis tenetur quam asperiores atque numquam ab eius, adipisci mollitia.</p>
    </Modal>
    </div>
  )
}

export default App
