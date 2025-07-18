import '../styles/CardGestor.css'


const CardsGestor = ({ title, icon, task})=>{
    return(
        <>
          <div className="card-container">
            
              <div>
                <h3>{title}</h3>
                <h2>{task}</h2>
              </div>
              <img src={icon} alt="" />
            </div>
            
          
        </>
    )
}

export default CardsGestor;

