import React from "react";
import {Card, Button} from "react-bootstrap";

const Product = ({product, handleBuyProduct, handleProductClick}) => {
    return (
        <>
            {product && product?.name &&
                <Card style={{width: '18rem', position: 'relative', paddingBottom: '3rem', cursor: 'pointer', border: 'solid 5px'}}>
                    <Card.Body className="text-center">
                        <Card.Title>{product?.name}</Card.Title>
                        <Card.Img onClick={()=>handleProductClick(product.id)} variant="top" src={product.image}
                                  style={{
                                      maxWidth: '250px',
                                      height: '250px',
                                      width: 'auto',
                                      objectFit: 'contain',
                                      margin: '0 auto',
                                      display: 'block'
                                  }}  />
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between"
                                 style={{position: 'absolute', bottom: '0', width: '100%'}}>
                        <div style={{fontWeight: 'bold'}}>{product.price}</div>
                        <Button variant="primary" onClick={()=>handleBuyProduct(product.id)}>Buy</Button>
                    </Card.Footer>
                </Card>}
            {(!product || !product?.name) && <>Missing Product</>}
        </>
    )
}

export default Product;
