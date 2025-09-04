import { useState,useEffect } from "react";
import CardsGestor from "../common/CardsGestor"
import { getTask } from "../../services/localStorageService";

const ContainerCards = ({ updateTasks }) => {

    const [countTask, setCountTask] = useState(0);
    const [countCompletedTasks, setCountCompletedTasks] = useState(0);
    const [countMissingTask, setCountMissingTask] = useState(0);

    //seteamos la variable que contiene el estado enviado de cada tarea
    useEffect(() => {
        const tarea = getTask();
        setCountTask(tarea.length);

        setCountCompletedTasks(tarea.filter(t => t.isCompleted === true).length);

        setCountMissingTask(tarea.filter(t => t.isCompleted === false).length);

    }, [updateTasks])


    return (
        <>
            <CardsGestor
                title='total'
                task={countTask}
                icon='../../public/assets/total.gif'
            />
            <CardsGestor
                title='Completadas'
                task={countCompletedTasks}
                icon='../../public/assets/completadas.gif'
            />
            <CardsGestor
                title='Pendientes'
                task={countMissingTask}
                icon='../../public/assets/pendiente.gif'
            />
        </>
    )
}

export default ContainerCards;