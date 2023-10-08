import "./main-style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "../src/pages/login/signup/Signup.jsx";
import Login from "../src/pages/login/signup/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductsManagement from "./components/Dashboard/Products-management";
import DashContent from "./components/Dashboard/DashContent";
import ShowUser from "./components/Dashboard/ShowUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/signup" element={<Signup/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/dashboard" element={<Dashboard />} >
            <Route path={''} element={<DashContent />} />
            <Route path={'ProductsManagement'} element={<ProductsManagement />} />
            <Route path= "showuser" element={ <ShowUser/>  } />
        </Route>
      </Routes>
    </>
  );
}

export default App;