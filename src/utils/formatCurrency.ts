import { CURRENCY_FORMATTER } from './constants.ts'

export const formatCurrency = (price: number): string => CURRENCY_FORMATTER.format(price)