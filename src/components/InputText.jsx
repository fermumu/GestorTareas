import '../styles/InputText.css'

const InputText = ()=>{
    return(
      <>
        <div className="text-container">
          <input type="text" placeholder="Escribir tarea"/>
          <button>ENVIAR</button>
        </div>
      </>  
    )
}

export default InputText;