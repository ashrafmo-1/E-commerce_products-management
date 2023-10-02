import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";


const ProductsManagement = () => {
    // get all products from the database and add them to the list of products
    const [product, setProduct] = useState([])
    const apilink = 'https://database-products.onrender.com/products'
    useEffect(() => {
        fetch(apilink).then((response) => response.json()).then((data) => setProduct(data))
    }, []);

    return (
        <Container>
            <h2> products management </h2>
            <p> this site privet from admins only </p>
            <Table striped bordered responsive className={''} >
                <thead>
                <tr>
                    <th className={'text-center'}>photo</th>
                    <th className={'text-center'}>id</th>
                    <th>product name</th>
                    <th>category</th>
                    <th className={'text-center'}>length</th>
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
                        <td className={'text-center'}>{product.rating.count}</td>
                        <td className={'text-center'}>${product.price}</td>
                        <td className={'gap-2 d-flex justify-content-center'}>
                            <Button variant={"outline-danger"}>X</Button>
                            <Button variant={"outline-primary"}>show</Button>
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