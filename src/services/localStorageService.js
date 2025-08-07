


export function saveTask(infoTitle,infoDescription, prioridad, fechaLimite, categoria, isCompleted) {

    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));

    const lista = tareasGuardadas || [];
    
    const tareas = {
        titulo: infoTitle,
        description: infoDescription,
        prioridad:prioridad,
        fechaLimite:fechaLimite,
        categoria:categoria,
        isCompleted:isCompleted
    }

    lista.unshift(tareas);
    
    localStorage.setItem("tareas",JSON.stringify(lista));
};

export function overwriteTasks(tareasActualizadas) {
    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
}

export function getTask() {
    return JSON.parse(localStorage.getItem("tareas")) || [];
    
}