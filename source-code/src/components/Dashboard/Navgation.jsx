import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Navgation = (props) => {
    return (
        <Navbar expand="lg" data-bs-theme="dark" style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px', backgroundColor: '#0077b6'}}>
            <Container fluid>
                <Link to="/" className={"fw-bold navbar-brand"}> e-commerce Dashboard </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                        <Link to="" className={'nav-link'}>admins</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navgation;