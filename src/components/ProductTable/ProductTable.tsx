import {useEffect, useState} from "react";
import {Product} from "../../types/Product.ts";
import {ProductService} from "../../services/ProductService.ts";
import Loader from "../Loader/Loader.tsx";
import {Button, Table} from "react-bootstrap";
import {ModalType} from "../../types/ModalType.ts";
import ProductModal from "../ProductModal/ProductModal.tsx";


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
    const initializableNewProduct = (): Product => {
        return {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
        };
    };
            const [product, setProduct] = useState<Product>(initializableNewProduct);
            const [showModal, setshowModal] = useState(false);
            const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
            const [title, setTitle] = useState("");
            const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
                setTitle(newTitle);
                setModalType(modal);
                setProduct(prod);
                setshowModal(true);
            };
    return (
        <>
            <Button onClick={() => handleClick("Nuevo producto", initializableNewProduct(), ModalType.CREATE)}> Nuevo Producto </Button>
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
                                 <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
                             </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {showModal && (
                <ProductModal
                    show={showModal}
                    onHide={() => setshowModal(false)}
                    title={title}
                    modalType={modalType}
                    prod={product}
                    />
            )}
        </>
    )
}
export default ProductTable












