


const ButtonTask = ({ setShowModal }) => {
    return(
        <>
            <button onClick={()=> setShowModal(true)}>+ Nueva tarea</button>
        </>
    )
}

export default ButtonTask;