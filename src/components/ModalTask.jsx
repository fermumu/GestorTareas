import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useTaskForm } from '../hooks/useTaskForm';
import ModalClose from "./ModalClose";

const ModalTask = ({ showModal, setShowModal, setUpdateTasks }) => {

    if (!showModal) return null;


    const {
        infoTitle, setInfoTitle,
        infoDescription, setInfoDescription,
        prioridad, setPrioridad,
        fechaLimite, setFechaLimite,
        categoria, setCategoria,
        modalClose, setModalClose,
        errorMessage,
        handleCreateTask,
        resetForm
    } = useTaskForm(setShowModal);


    const handleClose = () => {
        setShowModal(false);
        resetForm();
    }

    const handleClick = ()=> {
        handleCreateTask();
        setUpdateTasks(prev => !prev);
    }



    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Nueva Tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa el título de la tarea"
                                autoFocus
                                value={infoTitle}
                                onChange={e => setInfoTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder='Describe la tarea...'
                                value={infoDescription}
                                onChange={e => setInfoDescription(e.target.value)}
                            />
                        </Form.Group>
                        <div className='row'>
                            <Form.Group className="mb-3 col-md-6" >
                                <Form.Label>Prioridad</Form.Label>
                                <Form.Select value={prioridad} onChange={e => setPrioridad(e.target.value)}>
                                    <option value="">Seleccionar</option>
                                    <option value="Alta">Alta</option>
                                    <option value="Media">Media</option>
                                    <option value="Baja">Baja</option>
                                </Form.Select>

                            </Form.Group>
                            <Form.Group className="mb-3 col-md-6">
                                <Form.Label>
                                    Fecha límite
                                </Form.Label>
                                <Form.Control type="date" value={fechaLimite} onChange={e => setFechaLimite(e.target.value)}>

                                </Form.Control>
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ej. Desarrollo, Diseño..."
                                autoFocus
                                value={categoria}
                                onChange={e => setCategoria(e.target.value)}
                            />
                        </Form.Group>
                        {
                            errorMessage && (
                                <div className='alert alert-danger text-center p-2'>
                                    {errorMessage}
                                </div>
                            )
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button className='btn-lg px-5' variant="dark" onClick={handleClick}>
                        Crear Tarea
                    </Button>
                    <Button className='btn-lg' variant="outline-secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
            <ModalClose show={modalClose} handleClose={() => setModalClose(false)} />
        </>
    );



}

export default ModalTask;