
import Button from 'react-bootstrap/Button';

const ButtonTask = ({ setShowModal }) => {
    return(
        <>
            <Button variant="dark" type="button" onClick={()=> setShowModal(true)} >+ Nueva Tarea</Button>
        </>
    )
}

export default ButtonTask;