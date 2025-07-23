import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalTask = ({ showModal, setShowModal }) => {

    const [infoTitle, setInfoTitle] = useState();
    const [infoDescription, setInfoDescription] = useState();
    const [prioridad, setPrioridad] = useState();
    const [fechaLimite, setFechaLimite] = useState();


    if (!showModal) return null;


    const handleClose = () => {
        setShowModal(false);
        setInfoTitle('');
        setInfoDescription('');

    };

    const handleCreateTask = () => {
        if (infoTitle != '') {
            console.log(infoTitle);
            console.log(infoDescription);
            setInfoTitle('');
            setInfoDescription('');

            handleClose();
        } else {
            console.log('El titulo no puede estar vacio');
        }
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
                                <Form.Select>
                                    <option value="seleccionar">Seleccionar</option>
                                    <option value="alta">Alta</option>
                                    <option value="media">Media</option>
                                    <option value="baja">baja</option>
                                </Form.Select>

                            </Form.Group>
                            <Form.Group className="mb-3 col-md-6">
                                <Form.Label>Fecha límite</Form.Label>
                                <Form.Control type="date" >

                                </Form.Control>
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ej. Desarrollo, Diseño..."
                                autoFocus
                                value={infoTitle}
                                onChange={e => setInfoTitle(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button className='btn-lg px-5' variant="dark" onClick={handleCreateTask}>
                        Crear Tarea
                    </Button>
                    <Button className='btn-lg' variant="outline-secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );



}

export default ModalTask;