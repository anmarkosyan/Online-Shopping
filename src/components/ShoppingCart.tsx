import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext.tsx"
import { CartItem } from "./CartItem.tsx"
import { formatCurrency } from "../utils/formatCurrency.ts"
import carItems from "../data/cars.json"

export type ShoppingCartProps = {
    isOpen: boolean
}

export const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const {closeCart, cartItems} = useShoppingCart();

    return <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end">
        <Offcanvas.Header>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => <CartItem key = {item.id} {...item}/>)}
                <div className="ms-auto fw-bold fs-5">
                    Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = carItems.find(item => item.id === cartItem.id);

                        return total + (item?.price || 0);
                        }, 0))}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}