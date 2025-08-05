


export function saveTask(infoTitle,infoDescription, prioridad, fechaLimite, categoria) {

    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));

    const lista = tareasGuardadas || [];
    
    const tareas = {
        titulo: infoTitle,
        description: infoDescription,
        prioridad:prioridad,
        fechaLimite:fechaLimite,
        categoria:categoria
    }

    lista.unshift(tareas);
    
    
    localStorage.setItem("tareas",JSON.stringify(lista));
};

export function getTask() {
    return JSON.parse(localStorage.getItem("tareas")) || [];
    
}