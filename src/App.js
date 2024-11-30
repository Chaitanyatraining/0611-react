import FuncComp from "./FuncComp"
import ClassComp from "./ClassComp"
import Stylings from "./Components/Stylings/Stylings"
import CounterComp from "./Components/CounterComp"
import ListsandKeys from "./Components/ListsandKeys"
import Navbar from "./Components/Navbar"
import Routing from "./Routing/Routing"
import ParentComp from "./Components/Hooks/ParentComp"
import UseMemoHook from "./Components/Hooks/UseMemoHook"

const App = () => {
  const arr = [1, 2, 3, 4, 5]
  const details = {
    name: 'peter',
    id: 1,
    email: 'peter@gmail.com',
    contact: 9098989898,
    status: 'true'
  }

  return (
    <div className="App text-center">
      <Navbar />
      {/* <ParentComp /> */}
      <UseMemoHook />
      {/* <Routing /> */}


      {/* <CounterComp />
      <ListsandKeys /> */}
      {/* <Stylings /> */}
      {/* <h2>App Comp</h2>
      <FuncComp courseName='ReactJs' arrval={arr} />
      <ClassComp courseName='ReactJs' arrval={arr} /> */}
    </div>
  )
}

export default App