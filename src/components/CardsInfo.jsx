import '../styles/CardsInfo.css'


const CardsInfo = (props) => {
    return (
        <>
            <div className="container-cards">
                <h3>{props.titulo}</h3>
                <h3>{props.description}</h3>
                <h3>{props.fechaLimite}</h3>
            </div>
        </>
    )
};

export default CardsInfo;