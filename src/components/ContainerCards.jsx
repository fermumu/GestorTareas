import CardsGestor from "../components/CardsGestor"

const ContainerCards = () => {
    return(
        <>
            <CardsGestor 
                title='total'
                task='4'
                icon='../src/assets/react.svg'
            />
            <CardsGestor 
                title='Completadas'
                task='4'
                icon='../src/assets/react.svg'
            />
            <CardsGestor 
                title='En progreso'
                task='4'
                icon='../src/assets/react.svg'
            />
            <CardsGestor 
                title='Pendientes'
                task='4'
                icon='../src/assets/react.svg'
            />
        </>
    )
}

export default ContainerCards;