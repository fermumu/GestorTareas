


export function saveTask(infoTitle,infoDescription, prioridad, fechaLimite, categoria) {

    const tareas = {
        titulo: infoTitle,
        description: infoDescription,
        prioridad:prioridad,
        fechaLimite:fechaLimite,
        categoria:categoria

    }
    
    localStorage.setItem("tareas",JSON.stringify(tareas));
};

export function getTask() {
    const getData = JSON.parse(localStorage.getItem("tareas"));

}