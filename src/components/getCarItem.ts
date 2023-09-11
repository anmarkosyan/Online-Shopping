import cartItems from '../data/cars.json'
import { ItemProps } from './types.ts'

export const getCarItem = (id: number): ItemProps | undefined => cartItems.find(item => item.id === id);