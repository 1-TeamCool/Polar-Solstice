import {Container, Nav, Navbar} from "react-bootstrap";

import homeImage from "../images/home.png";

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img style={{height: "100px", width: "100px", borderRadius: "50px"}} src={homeImage} alt="Home Image" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                        <Nav.Link href="/cart">My Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;
