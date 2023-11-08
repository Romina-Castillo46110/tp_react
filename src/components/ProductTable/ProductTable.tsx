import {useEffect, useState} from "react";
import {Product} from "../../types/Product.ts";
import {ProductService} from "../../services/ProductService.ts";
import Loader from "../Loader/Loader.tsx";
import {Table} from "react-bootstrap";

const ProductTable = () => {
    const[products, setProducts] = useState<Product[]>([]);
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await  ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };
        fetchProducts();
    }, []);
    console.log(JSON.stringify(products, null, 2));
    return (
        <>
            {isLoading ? <Loader/> : (
                <Table hover>
                    <thead>
                        <tr>
                            <th> Titulo </th>
                            <th> Precio </th>
                            <th> Descripcion </th>
                            <th> Categoria </th>
                            <th> Imagen </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map( product => (
                             <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>img src={product.image} alt={product.title} style={{width: '50px'}}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}
export default ProductTable