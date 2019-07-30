import React from 'react';
import { render, cleanup,fireEvent} from '@testing-library/react';
import Product from "./index"
import {cartStore} from "../../../store/Instance"
afterEach(cleanup)

const product={
    availableSizes: ["S", "XS"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "4 MSL",
    id: 12,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 12064273040195392,
    style: "Black with custom print",
    title: "Cat Tee Black T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
  }
  
describe('Product', () => { 
  it('should contains title', () => {
    const { getByText } = render(<Product {...product}/>)
    getByText('Cat Tee Black T-Shirt')
  })
  it('should contains price', () => {
    const { getByText } = render(<Product {...product}/>)
    getByText('$ 10.9')
  })
  it('sinstallements', () => {
    const { getByText } = render(<Product {...product}/>)
    getByText('or 9 x $1.21')
  })
  it('should contains add tocart function call', () => {
    jest.spyOn(cartStore, 'onAddProductToCart');
    const { getByText } = render(<Product {...product}/>)
    const addtocart=getByText('Add To Cart')
    fireEvent.click(addtocart)
    expect(cartStore.onAddProductToCart).toHaveBeenCalled();
  })
})