import { useState } from "react"
import ContainerCards from "./components/layout/ContainerCards"
import Title from "./components/layout/Title"
import './styles/App.css'
import ModalTask from "./components/modals/ModalTask"
import TaskCards from "./components/task/TaskCards"
import TaskSearch from "./components/layout/TaskSearch"


function App() {

  const [showModal, setShowModal] = useState(false);
  const [updateTasks, setUpdateTasks] = useState(false);
  

  return (
    <>
      <div className="body-container">
        <Title/>
        <div className="gestor-container">
          <ContainerCards updateTasks = {updateTasks}/>
        </div>
        <TaskSearch setShowModal = {setShowModal}/>
        <ModalTask showModal = {showModal} setShowModal = {setShowModal} setUpdateTasks = {setUpdateTasks}/>
        <TaskCards updateTasks = {updateTasks} setUpdateTasks={setUpdateTasks}/>
      </div>
      
    </>
  )
}

export default App
