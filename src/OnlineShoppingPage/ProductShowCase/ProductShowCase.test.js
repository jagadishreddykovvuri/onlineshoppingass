import React from 'react';

import { render, cleanup,fireEvent} from '@testing-library/react';
import ProductShowCase from "./index"
import productStore from "../../store/Instance"
productStore.products=[{
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
  },
  {
    availableSizes: ["M"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 13,
    installments: 5,
    isFreeShipping: true,
    price: 29.45,
    sku: 51498472915966370,
    style: "Front print and paisley print",
    title: "Dark Thug Blue-Navy T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg"
  },
  {
    availableSizes: ["X", "L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "GPX Poly 1",
    id: 14,
    installments: 3,
    isFreeShipping: true,
    price: 9,
    sku: 10686354557628304,
    style: "Front tie dye print",
    title: "Sphynx Tie Dye Wine T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg"
  }

]
productStore.isLoading="onsuccess"
describe('ProductShowCase', () => { 
    it('should contains product count', () => {
        const { getByText } = render(<ProductShowCase />)
        getByText('3 Product(s) found')
      
    })

}
)