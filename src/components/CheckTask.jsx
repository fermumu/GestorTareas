import "../styles/CheckTask.css"
import { getTask, overwriteTasks, saveTask } from "../services/localStorageService"


const CheckTask = ({ isChecked, setIsChecked,titulo, isCompleted, updateTasks }) => {
    
    const handleCheck = ()=>{
        setIsChecked( !isChecked )
        
        const tareas = getTask();

        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.titulo === titulo){
                return { ...tarea, isCompleted: !isCompleted}
            }
            return tarea;
        });

        overwriteTasks(tareasActualizadas)

        updateTasks();
    }
    return(
        <>
            <input type="checkbox" onChange={handleCheck} checked={isChecked} className="check"/>
        </>
    )
}

export default CheckTask;