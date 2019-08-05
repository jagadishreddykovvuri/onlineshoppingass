import React from 'react';

import { render, cleanup,fireEvent} from '@testing-library/react';
import ProductShowCase from "./index"
import productStore from "../../store/Instance"

productStore.isLoading="onsuccess"
beforeAll(async () => { await productStore.onFetchProductList()})
describe('ProductShowCase', () => { 
    it('should contains product count', () => {
        const { getByText } = render(<ProductShowCase />)
        getByText('16 Product(s) found')
      
    })

}
)