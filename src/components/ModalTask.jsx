import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalTask = ({ showModal, setShowModal }) => {

    const [infoTitle, setInfoTitle] = useState();
    const [infoDescription, setInfoDescription ]= useState();


    if (!showModal) return null;


    const handleClose = () => {
        setShowModal(false);
        setInfoTitle('');
        setInfoDescription('');

    };

    const handleCreateTask = ()=>{
        if(infoTitle != ''){
            console.log(infoTitle);
            console.log(infoDescription);
            setInfoTitle('');
            setInfoDescription('');

            handleClose();
        }else{
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
                                placeholder="Ingresa el titulo de la tarea"
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
                                placeholder='Describe la tarea'
                                value={infoDescription}
                                onChange={e => setInfoDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCreateTask}>
                        Crear Tarea
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );



}

export default ModalTask;