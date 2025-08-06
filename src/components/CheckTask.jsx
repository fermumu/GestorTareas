import "../styles/CheckTask.css"


const CheckTask = ({ isChecked, setIsChecked }) => {

    const handleCheck = ()=>{
        setIsChecked( !isChecked )
    }
    return(
        <>
            <input type="checkbox" onChange={handleCheck} checked={isChecked} className="check"/>
        </>
    )
}

export default CheckTask;