import { useState } from "react"
import ButtonTask from "./components/ButtonTask"
import ContainerCards from "./components/ContainerCards"
import Title from "./components/Title"
import './styles/App.css'
import ModalTask from "./components/ModalTask"
import TaskCards from "./components/TaskCards"


function App() {

  const [showModal, setShowModal] = useState(false);
  const [updateTasks, setUpdateTasks] = useState(false);
  

  return (
    <>
      <div className="body-container">
        <Title/>
        <div className="gestor-container">
          <ContainerCards />
        </div>
        <ButtonTask setShowModal = {setShowModal}/>
        <ModalTask showModal = {showModal} setShowModal = {setShowModal} setUpdateTasks = {setUpdateTasks}/>
        <TaskCards updateTasks = {updateTasks}/>
      </div>
      
    </>
  )
}

export default App
