
    const [infoTitle, setInfoTitle] = useState('');
    const [infoDescription, setInfoDescription] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [fechaLimite, setFechaLimite] = useState('');
    const [categoria, setCategoria] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCreateTask = () => {
        if (infoTitle != '' && infoDescription != '' && prioridad != ''  && fechaLimite != '' && categoria != '') {
            console.log(infoTitle);
            console.log(infoDescription);
            console.log(prioridad);
            console.log(fechaLimite);
            console.log(categoria);
            
            
            
            setInfoTitle('');
            setInfoDescription('');
            setPrioridad('');
            setFechaLimite('');
            setCategoria('');
            setErrorMessage('')

            handleClose();
        } else {
            setErrorMessage('Debes llenar todos los campos')
            console.log('falta llenar datos');
            
        }
    }