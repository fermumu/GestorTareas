import { Modal, Button } from 'react-bootstrap';

const ModalClose = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Tarea creada</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                ¡La tarea se ha creado exitosamente!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalClose;
