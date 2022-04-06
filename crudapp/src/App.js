import "bootstrap/dist/css/bootstrap.min.css" 
import { useSelector } from "react-redux";
import Login from "./Components/Login/Login";
import{Routes,Route} from "react-router-dom";
import ListUser from "./Components/User/ListUser";
import AddUser from "./Components/User/AddUser";
import EditUser from "./Components/User/EditUser";
import Header from "./Components/Header/Header";
function App() {
  const {islogged} = useSelector((state)=>state)
  const localData = localStorage.getItem("token")
  return (

    <div className="container">
      {/* <h2>This is crud app</h2>
       */}
       {localData?
      <Header/>
      : ""}
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/list" element={<ListUser/>}></Route>
        <Route path="/create" element={<AddUser/>}></Route>
        <Route path="/edit/:id" element={<EditUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
