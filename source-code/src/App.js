import NavgationBar from "./components/NavgationBar";
import Home from './pages/Home/Home'
import './main-style.css'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <NavgationBar />
        <Routes>
            <Route path={'/'} element={<Home />}/>
        </Routes>
    </>
  );
}

export default App;