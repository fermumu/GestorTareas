import { useState } from 'react';
import '../styles/CardsInfo.css'
import CheckTask from './CheckTask';


const CardsInfo = (props) => {
    const [isChecked, setIsChecked] = useState(props.isCompleted);

    

    return (
        <>
            <div className="container-cards">
                <div className='check'>
                    <CheckTask 
                        isChecked={isChecked} 
                        setIsChecked={setIsChecked} 
                        titulo={props.titulo} 
                        isCompleted={props.isCompleted}
                        setUpdateTasks={props.setUpdateTasks}
                    />
                </div>
                <div className='info-cards'>
                    <div>
                        <h3 className={isChecked ? "tachado" : ""}>{props.titulo}</h3>
                    </div>
                    <div>
                        <p>{props.description}</p>
                    </div>
                    <div className='container-plazo'>
                        <p>Fecha limite : {props.fechaLimite}</p>
                        <div className='categoria'>
                            <p>{props.categoria}</p>
                        </div>
                        <div className={`prioridad prioridad-${props.prioridad.toLowerCase()}`}>
                            <p>{props.prioridad}</p>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
};

export default CardsInfo;