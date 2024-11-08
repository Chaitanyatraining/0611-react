import FuncComp from "./FuncComp"
import ClassComp from "./ClassComp"

const App = () => {
  const arr = [1,2,3,4,5]
  return(
    <div className="App">
      <h2>App Comp</h2>
      <FuncComp courseName='ReactJs' arrval={arr} />
      <ClassComp courseName='ReactJs' arrval={arr} />
    </div>
  )
}

export default App