import { useState } from "react"
import ButtonTask from "./components/ButtonTask"
import ContainerCards from "./components/ContainerCards"
import Title from "./components/Title"
import './styles/App.css'
import ModalTask from "./components/ModalTask"


function App() {

  const [showModal, setShowModal] = useState(false);
  

  return (
    <>
      <div className="body-container">
        <Title/>
        <div className="gestor-container">
          <ContainerCards />
        </div>
        <ButtonTask setShowModal = {setShowModal}/>
        <ModalTask showModal = {showModal} setShowModal = {setShowModal}/>
        
      </div>
      
    </>
  )
}

export default App
