import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BsCart4} from "react-icons/bs";
import Table from 'react-bootstrap/Table';
import pro from '../assets/images/f3.jpg'

const Cart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button  className='w-25  ' variant="danger" onClick={handleShow}>
                <BsCart4 />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Table bordered size="sm" responsive className={'text-center'}>
                        <thead>
                        <tr>
                            <th>photo</th>
                            <th>price</th>
                            <th>length</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={'w-25'}> <img className={'w-100'} src={pro} /> </td>
                            <td><Button className={"mx-1"} variant="success" style={{transform: 'translateY(50%)'}}> get now </Button></td>{/* btn */}
                            <td>2</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}> <img className={'w-100'} src={pro} /> </td>
                            <td><Button className={"mx-1"} variant="success" style={{transform: 'translateY(50%)'}}> get now </Button></td>{/* btn */}
                            <td>1</td>
                        </tr>
                        <tr>
                            <td className={'w-25'}> <img className={'w-100'} src={pro} /> </td>
                            <td><Button className={"mx-1"} variant="success" style={{transform: 'translateY(50%)'}}> get now </Button></td>{/* btn */}
                            <td>7</td>
                        </tr>
                        </tbody>
                    </Table>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default  Cart;