import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import cartImage from '/images/shopping-card-svgrepo-com.svg'

export const Navbar = () => {
    const {openCart} = useShoppingCart();

    return <NavbarBs
      sticky="top"
      className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>COX AUTOMOTIVE</Nav.Link>
                <Nav.Link to="/brands" as={NavLink}>BRANDS</Nav.Link>
            </Nav>
            <Button
              onClick={openCart}
              variant="outline-primary"
              className="rounded-circle">
                <img src={cartImage} width="45rem" height="45rem"/>
            </Button>
        </Container>
    </NavbarBs>
}