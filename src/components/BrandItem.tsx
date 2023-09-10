import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../utils/formatCurrency.ts";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import { CarItemsProps } from './types.ts'

export const BrandItem = ({id, name, price, imgUrl}: CarItemsProps) => {
    const {increaseCartQuantity} = useShoppingCart();

    return <Card className="h-100">
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{objectFit: 'cover'}}
        />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className="d-flex justify-content-berween align-items-baseline mb-4">
               <span className="fs-2">{name}</span>
               <span className="ms-2 text-muted">{formatCurrency(price)}</span>
           </Card.Title>
           <div className="mt-auto">
               <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
           </div>
        </Card.Body>
    </Card>
}