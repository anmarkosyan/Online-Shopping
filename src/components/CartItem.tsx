import cartItems from '../data/cars.json'
import {Stack} from "react-bootstrap";
import {formatCurrency} from "../utils/formatCurrency.ts";


//TODO: do type structure and remove duplicates
type CartItemProps = {
    id: number
    quantity: number
}
export function CartItem({id}: CartItemProps){
    const item = cartItems.find(item => item.id === id);
    if(!item){
        return;
    }

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.imgUrl} style={{width: "123px", height: "75px", objectFit: "cover"}}
             />
            <div className="me-auto">
                <div className="text-muted" style={{fontSize: ".65rem"}}>{item.name} </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>{formatCurrency(item.price)}</div>
            </div>
        </Stack>
    )

}