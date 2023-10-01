import NavgationBar from "./components/NavgationBar";
import Home from "./pages/Home/Home";
import "./main-style.css";
import { Route, Routes } from "react-router-dom";
import Signup from "../src/pages/login/signup/Signup.jsx";
import Login from "../src/pages/login/signup/Login";


function App() {
  return (
    <>
      <NavgationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/signup" element={<Signup/>}/>
        <Route path= "/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
