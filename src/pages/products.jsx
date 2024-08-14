import {useEffect, useState} from "react";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import Product from "../components/product.jsx";
import {addToCart} from "../utils/cart.js";

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);

    const handleProductClick = (productId) => {
        const product = products.find(p => p.id === productId);
        setSelectedProduct(product);
    }

    const addProductToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        addToCart(product);
    }

    const handleClose = () => setSelectedProduct(null);

    const fakeProducts = [
        {
            id: 1,
            name: "Ultra Mittens",
            price: "$20",
            details: "Designed to keep your hands dry and warm when out all day in snowy, cold conditions with advanced insullation.",
            image: './src/images/gloves.jpg'

        },
        {
            id: 2,
            name: "Snow Boots",
            price: "$250",
            details: "Snow boots lined with a skin-friendly micro fleece which covers the inside, from the top of the insole. Its wrapped completely the feet to keep warm. ",
            image: './src/images/boots.jpg'

        },
        {
            id: 3,
            name: "Ski Mask",
            price: "$25",
            details: "Moisture-Wicking: Advanced fabric technology wicks sweat away from the skin, keeping you dry and comfortable.",
            image: './src/images/mask.jpg'

        },
        {
            id: 4,
            name: "Sherpa Sweater" ,
            price: "$50",
            details: "Warm, soft, sherpa-lined, windproof and comfortable thermal fleece keep you warm in cold weather.",
            image: './src/images/sweater.jpg'

        },
        {
            id: 5,
            name: "Artic Coat",
            price: "$1,500",
            details: "Featuring a water repellent outer shell, our jacket will absorb moisture and keep you dry, providing ultimate protection from wind, water, and snow.",
            image: './src/images/coat.jpg'

        },
        {
            id: 6,
            name: "Thermal Socks",
            price: "$40",
            details: "The perfect thick wool socks trap in heat to keep your feet warm in even the chilliest winter air.",
            image: './src/images/socks.jpg'

        },
        {
            id: 7,
            name: "Winter Muffs",
            price: "$35",
            details: "Made to fully cover your ears with a thick, soft cozy fleece lining. The double-layer construction protects you from even the coldest winter days with extra warmth.",
            image: './src/images/muffs.jpg'

        },
        {
            id: 8,
            name: "Polar Pants",
            price: "$160",
            details: "Rip proof material used for protection againtst even the toughest weather.",
            image: './src/images/pants.jpg'

        },
        {
            id: 9,
            name: "Sleeping bag",
            price: "$300",
            details: "Even in extreme temperatures, these sleeping bags will keep you warm and comfortable thanks to their innovative fiber fill.",
            image: './src/images/sleeping_bag.jpg'

        },
        ]

    useEffect(() => {
        //TODO: get the products from the backend and display them
        setProducts(fakeProducts)
    }, []);


    return (
        <Container className="mt-3">
            {products.map((product, index) => (
                index % 3 === 0 && (
                    <Row key={index} className="mb-4">
                        {products.slice(index, index + 3).map(product => (
                            <Col key={product.id} sm={12} md={4}>
                                <Product product={product} handleBuyProduct={addProductToCart} handleProductClick={handleProductClick} />
                            </Col>
                        ))}
                    </Row>
                )
            ))}

            <Modal show={!!selectedProduct} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedProduct?.details}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Products;
