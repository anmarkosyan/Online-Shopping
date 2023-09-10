import {createContext, ReactNode, useContext, useState} from "react";
import {ShoppingCart} from "../components/ShoppingCart.tsx";
import {useLocalStorage} from "../hooks/useLocalStorage.ts";
import { CartItemProps } from '../components/types.ts'

type ShoppingCartProviderProps = {
    children:ReactNode
}

type ShoppingCartContext = {
    increaseCartQuantity:(id:number) => void
    openCart:() => void
    closeCart: () => void
    cartItems: CartItemProps[]

}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>("shoppingHook", []);

    const increaseCartQuantity = (id: number) =>{
        setCartItems(currentItem =>{
            if(currentItem.find(item => item.id === id) == null){
                return [...currentItem, {id, quantity: 1}]

            }else {
                return currentItem.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}

                    }else {
                        return item

                    }
                })

            }
        })

    }
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    return (
        <ShoppingCartContext.Provider value={{increaseCartQuantity,openCart, closeCart, cartItems}}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )

}