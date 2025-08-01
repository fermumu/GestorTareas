import { useState, useEffect } from "react";
import { getTask } from "../services/localStorageService";


const TaskCards = () =>{


    const [data, setData] = useState({})

    useEffect(() => {
        const tarea = getTask();
        console.log("Tarea cargada:", tarea);
        setData(tarea)
    }, [])
    
    return(
        <>
            {data && (
                <div>
                    <h3>{data.titulo}</h3>
                    <h3>{data.description}</h3>
                    
                </div>
            )}
        </>
    )
};

export default TaskCards;