import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const ProductsManagement = () => {
    // get all products from the database and add them to the list of products
    const [product, setProduct] = useState([])
    const apilink = 'https://database-products.onrender.com/products'

    const dataRequest = () => {
        fetch(apilink).then((response) => response.json()).then((data) => setProduct(data))
    }

    useEffect(() => {
        dataRequest()
    }, []);

    // remove products from the list of products
    const removeProduct = (product) => {
        Swal.fire({title: `are you sure delete - ${product.title.slice(0, 20)}`, showCancelButton: true, icon: 'warning'}).then((data) => {
            if(data.isConfirmed === true){
                 fetch(`https://database-products.onrender.com/products/${product.id}`, {method: 'delete'})
                 .then(res => res.json())
                 .then(() => dataRequest())
            }else{
                    return false;
            }
        })
    }
    return (
        <Container>
            <h2 style={{color: 'darkblue'}}> products management </h2>
            <p style={{color: '#777'}}> this site privet from admins only </p>
            <Table striped bordered responsive className={''} >
                <thead className={'sticky-top'}>
                <tr>
                    <th className={'text-center'}>photo</th>
                    <th className={'text-center'}>id</th>
                    <th>product name</th>
                    <th>category</th>
                    <th className={'text-center'}>price</th>
                    <th className={'text-center'}>controls</th>
                </tr>
                </thead>
                <tbody>
                {product.map((product, index) => (
                    <tr key={product.id}>
                        <td className={'text-center'}><img style={{width: '40px', height: '35px'}} src={product.image} /></td>
                        <td className={'text-center'}>{index + 1}</td>
                        <td>{product.title.slice(0, 20)}...</td>
                        <td>{product.category}</td>
                        <td className={'text-center'}>${product.price}</td>
                        <td className={'gap-2 d-flex justify-content-center'}>
                            <Button variant={"outline-danger"} onClick={() => removeProduct(product)}>X</Button>
                            <Button variant={"outline-primary"}>edit</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default ProductsManagement;