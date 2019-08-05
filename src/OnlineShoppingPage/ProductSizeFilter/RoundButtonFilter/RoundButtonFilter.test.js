import React from 'react';
import { render, cleanup,fireEvent} from '@testing-library/react';
import RoundButtonFilter from "./index"
import productStore from "../../../store/Instance"
describe('roundSizefilter', () => { 
    it('should call add filter size', () => {
      jest.spyOn(productStore, 'onAddorRemoveFilter');
      const { getByText } = render(<RoundButtonFilter size="S"/>)
      const sizefilter=getByText('S')
      fireEvent.click(sizefilter)
      expect(productStore.sizeFilter).toContain('S');
    })
    afterEach(cleanup)
    it('should call add filter size', () => {
        jest.spyOn(productStore, 'onAddorRemoveFilter');
        const { getByText } = render(<RoundButtonFilter size="S"/>)
        const sizefilter=getByText('S')
        fireEvent.click(sizefilter)
        expect(productStore.sizeFilter).not.toContain('S');

      })
  })