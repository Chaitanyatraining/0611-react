import FuncComptwo from "./FuncComptwo"

const FuncComp = (props) => {
    console.log(props)
    const {courseName} = props
   
    return(
        <div>
            <h2>This is FuncComponent</h2>
            <h3>CourseName : {courseName}</h3>
            <FuncComptwo />
        </div>
    )
}

export default FuncComp