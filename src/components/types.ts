export type CarItemsProps = {
  id: number,
  name: string,
  price:number,
  imgUrl: string
}

export type CartItemProps = {
  id: number
  quantity: number
}

export type ShoppingCartProps = {
  isOpen: boolean
}