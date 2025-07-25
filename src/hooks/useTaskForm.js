
import { useState } from 'react';
import { saveTask } from '../services/localStorageService';

export function useTaskForm(handleClose) {
    const [infoTitle, setInfoTitle] = useState('');
    const [infoDescription, setInfoDescription] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [fechaLimite, setFechaLimite] = useState('');
    const [categoria, setCategoria] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCreateTask = () => {
        if (infoTitle != '' && infoDescription != '' && prioridad != '' && fechaLimite != '' && categoria != '') {

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
            setErrorMessage('Debes llenar todos los campos')
            console.log('falta llenar datos');

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


