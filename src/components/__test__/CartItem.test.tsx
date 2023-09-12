import { CartItemProps, ItemProps } from '../types.ts'
import { render, screen } from '@testing-library/react'
import { CartItem } from '../CartItem.tsx'
import { getCarItem } from '../getCarItem.ts'
import { formatCurrency } from '../../utils/formatCurrency.ts'

jest.mock('../getCarItem');
jest.mock('../../utils/formatCurrency');

describe('CartItem', ()=>{
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should render CartItem component with correct message', () => {
    const itemMocked: ItemProps = {
      id: 12,
      name: 'test_name',
      price: 12.3,
      imgUrl: 'test_img'
    }
    const cartItemMocked:CartItemProps = {
      id: 123,
      quantity: 0
    }

    const getCarItemMock = jest.mocked(getCarItem).mockReturnValue(itemMocked);

    render(<CartItem{...cartItemMocked}/>)

    const message = screen.getByText('test_name').textContent

    expect(message).toEqual('test_name')

    expect(getCarItemMock).toBeCalledWith(cartItemMocked.id)
    expect(getCarItemMock).toBeCalledTimes(1)
  })

  it('should render CartItem component with correct quantity text', () => {
    const itemMocked: ItemProps = {
      id: 12,
      name: 'test_name',
      price: 12.3,
      imgUrl: 'test_img'
    }
    const cartItemMocked:CartItemProps = {
      id: 123,
      quantity: 2
    }
    const priceMocked = '$24.60';

    const getCarItemMock = jest.mocked(getCarItem).mockReturnValue(itemMocked);
    const totalPriceFormatterMock = jest.mocked(formatCurrency).mockReturnValue(priceMocked)

    render(<CartItem{...cartItemMocked}/>)

    const nameMessage = screen.getByText('test_name').textContent
    const priceMessage = screen.getByText(priceMocked).textContent

    expect(nameMessage).toEqual('test_name x2');
    expect(priceMessage).toEqual(priceMocked);

    expect(getCarItemMock).toBeCalledWith(cartItemMocked.id)
    expect(getCarItemMock).toBeCalledTimes(1)

    expect(totalPriceFormatterMock).toBeCalledTimes(1)
  })
})