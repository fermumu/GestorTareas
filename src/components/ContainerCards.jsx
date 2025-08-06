import CardsGestor from "../components/CardsGestor"

const ContainerCards = () => {
    return(
        <>
            <CardsGestor 
                title='total'
                task='4'
                icon='../src/assets/total.gif'
            />
            <CardsGestor 
                title='Completadas'
                task='4'
                icon='../src/assets/completadas.gif'
            />
            <CardsGestor 
                title='En progreso'
                task='4'
                icon='../src/assets/progreso.gif'
            />
            <CardsGestor 
                title='Pendientes'
                task='4'
                icon='../src/assets/pendiente.gif'
            />
        </>
    )
}

export default ContainerCards;