import './sidebar.css'
import {Link} from "react-router-dom";

const SIdeBar = (props) =>{
    return(
        <div className={'sideBar'}>
            <Link to={'/dashboard/ProductsManagement'} className={'sideBar-link'}>management products</Link>
            <Link to={'/'} className={'sideBar-link'}>users</Link>
            <Link to={'/'} className={'sideBar-link'}>add user</Link>
            <Link to={'/'} className={'sideBar-link'}>workers</Link>
        </div>
    )
}

export default SIdeBar;