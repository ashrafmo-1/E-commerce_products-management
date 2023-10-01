import './dashboard.css'
import Navigation from '../../components/Dashboard/Navgation'
import SIdeBar from "../../components/Dashboard/SIdeBar";
import {Outlet, Route, Routes} from "react-router-dom";
import DashContent from "../../components/Dashboard/DashContent";
import ProductsManagement from "../../components/Dashboard/Products-management";

const Dashboard = (props) => {
    return(
        <div className={'dashboard'}>
            <Navigation />
            <div className={'dashboard-content'}>
                <SIdeBar />
                <div style={{width: '80%'}}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;