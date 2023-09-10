import { CURRENCY_FORMATTER } from './constants.ts'

export const formatCurrency = (price: number) => CURRENCY_FORMATTER.format(price)