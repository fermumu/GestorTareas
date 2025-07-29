

export function validateTaskData(datos) {
    
    for (const [key, value] of Object.entries(datos)) {
        if (!value) {
            return{
                isValid : false,
                message: `El campo ${key} es obligatorio`
            }
        }
        
    }

    return {
        isValid: true,
        message:''
    }



    // if(!infoTitle ){
    //     return {
    //         isValid: false,
    //         message: 'El tutulo es obligatorio'
    //     }
    // }

    // if (!infoDescription) {
    //     return {
    //         isValid: false,
    //         message: 'La descripcion es obligatoria'
    //     }
    // }

    // if (!prioridad) {
    //     return {
    //         isValid: false,
    //         message: 'Debes seleccionar una prioridad'
    //     }
    // }

    // if (!fechaLimite) {
    //     return {
    //         isValid: false,
    //         message: 'Debes seleccionar una fecha'
    //     }
    // }

    // if (!categoria) {
    //     return {
    //         isValid: false,
    //         message: 'Debes escribir una categoria'
    //     }
    // }


    // return {
    //     isValid: true,
    //     message:''
    // }

}


// if(infoTitle != '' && infoDescription != '' && prioridad != '' && fechaLimite != '' && categoria != ''){
    //     return true
    // }

    // return false