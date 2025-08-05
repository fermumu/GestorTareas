import { useState, useEffect } from "react";
import { getTask } from "../services/localStorageService";
import CardsInfo from "./CardsInfo";


const TaskCards = ({ updateTasks }) => {


    const [data, setData] = useState([])

    useEffect(() => {
        const tarea = getTask();
        console.log("Tarea cargada:", tarea);
        setData(tarea)
    }, [updateTasks])

    return (
        <>
            {data.map(
                (datos, index) => (
                    <CardsInfo
                        key={index}
                        titulo={datos.titulo}
                        description={datos.description}
                        fechaLimite={datos.fechaLimite}
                    />
                )
            )}
        </>
    )
};

export default TaskCards;