import { renderHook } from '@testing-library/react';
import { useTree } from './useTree';

describe('first',()=>{
    

    it('first-test',()=>{
      const {result} = renderHook(useTree)
      expect(result.current).toBe({})
    })
    
})