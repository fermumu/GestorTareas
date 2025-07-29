
import { useState } from 'react';
import { saveTask } from '../services/localStorageService';
import { validateTaskData } from '../utils/validators/taskValidator';

export function useTaskForm(handleClose) {
    const [infoTitle, setInfoTitle] = useState('');
    const [infoDescription, setInfoDescription] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [fechaLimite, setFechaLimite] = useState('');
    const [categoria, setCategoria] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCreateTask = () => {
        
        const { isValid, message } = validateTaskData({
            Titulo:infoTitle,
            Descripcion:infoDescription, 
            Prioridad:prioridad, 
            Fecha:fechaLimite, 
            Categoria:categoria})
        
        if (isValid) {

            saveTask(infoTitle,infoDescription, prioridad, fechaLimite, categoria);

            setInfoTitle('');
            setInfoDescription('');
            setPrioridad('');
            setFechaLimite('');
            setCategoria('');
            setErrorMessage('')
            resetForm();
            handleClose();
        } else {
            setErrorMessage(message)
            console.log(message);

        }
    };

    const resetForm = () => {
        setInfoTitle('');
        setInfoDescription('');
        setPrioridad('');
        setFechaLimite('');
        setCategoria('');
        setErrorMessage('');
    }

    return {
        infoTitle, setInfoTitle,
        infoDescription, setInfoDescription,
        prioridad, setPrioridad,
        fechaLimite, setFechaLimite,
        categoria, setCategoria,
        errorMessage,
        resetForm,
        handleCreateTask
    };



}


