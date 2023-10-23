import React from 'react';
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import './mainheader.css'
import {BiSolidOffer} from "react-icons/bi";
import {TbTruckDelivery} from "react-icons/tb";

const MainHeader = () => {
    return (
        <Container>
            <div className={'main-header py-1 flex-between'}>
                <div className={'welcome-title'}>welcome to M&A store</div>
                <div className={'welcome-links gap-5 d-flex'}>
                    <Link className={'welcome-link'}> <span> <TbTruckDelivery /> </span> track your order</Link>
                    <Link className={'welcome-link'}> <span> <BiSolidOffer /> </span> get offers</Link>
                </div>
            </div>
        </Container>
    )
}

export default MainHeader;