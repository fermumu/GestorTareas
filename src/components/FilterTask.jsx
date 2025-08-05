import Form from 'react-bootstrap/Form';

function FilterTask() {
    return (
        <Form.Select aria-label="Default select example" >
            <option>Todas las tareas</option>
            <option value="1">Pendientes</option>
            <option value="2">En progreso</option>
            <option value="3">Completadas</option>
        </Form.Select>
    );
}

export default FilterTask;