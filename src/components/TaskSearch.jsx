
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonTask from './ButtonTask';
import FilterTask from './FilterTask';

function TaskSearch({ setShowModal }) {
    return (
        <Navbar className="bg-body-tertiary justify-content-around">
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            style={{ width: "600px" }}
                        />
                    </Col>
                    <Col xs="auto">
                        <FilterTask/>
                    </Col>
                    <Col xs="auto">
                        <ButtonTask setShowModal={setShowModal} />
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}

export default TaskSearch;