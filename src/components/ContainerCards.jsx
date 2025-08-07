import { useState,useEffect } from "react";
import CardsGestor from "../components/CardsGestor"
import { getTask } from "../services/localStorageService";

const ContainerCards = ({ updateTasks }) => {

    const [countTask, setCountTask] = useState(0);


    useEffect(() => {
        const tarea = getTask();
        setCountTask(tarea.length)
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
                task='4'
                icon='../src/assets/completadas.gif'
            />
            <CardsGestor
                title='En progreso'
                task='4'
                icon='../src/assets/progreso.gif'
            />
            <CardsGestor
                title='Pendientes'
                task='4'
                icon='../src/assets/pendiente.gif'
            />
        </>
    )
}

export default ContainerCards;