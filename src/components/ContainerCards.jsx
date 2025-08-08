import { useState,useEffect } from "react";
import CardsGestor from "../components/CardsGestor"
import { getTask } from "../services/localStorageService";

const ContainerCards = ({ updateTasks }) => {

    const [countTask, setCountTask] = useState(0);
    const [countCompletedTasks, setCountCompletedTasks] = useState(0);
    const [countMissingTask, setCountMissingTask] = useState(0);


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
                icon='../src/assets/total.gif'
            />
            <CardsGestor
                title='Completadas'
                task={countCompletedTasks}
                icon='../src/assets/completadas.gif'
            />
            <CardsGestor
                title='En progreso'
                task='4'
                icon='../src/assets/progreso.gif'
            />
            <CardsGestor
                title='Pendientes'
                task={countMissingTask}
                icon='../src/assets/pendiente.gif'
            />
        </>
    )
}

export default ContainerCards;