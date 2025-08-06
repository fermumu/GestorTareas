import '../styles/CardsInfo.css'
import CheckTask from './CheckTask';


const CardsInfo = (props) => {
    return (
        <>
            <div className="container-cards">
                <div className='check'>
                    <CheckTask />
                </div>
                <div className='info-cards'>
                    <div>
                        <h3>{props.titulo}</h3>
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