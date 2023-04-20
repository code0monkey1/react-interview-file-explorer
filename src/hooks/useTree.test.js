import { renderHook } from '@testing-library/react';
import useTree from './useTree';

describe('file-explorer',()=>{
    

    it('first-test',()=>{
      const {result} = renderHook(useTree)
      expect(result.current.tree).toEqual(undefined)
    })

    it('gets the initial tree',()=>{
        const myJson={
          file:"whatever",
          folder:"whatever"
        }
        const {result} = renderHook(useTree,{initialProps:myJson})
        
        /* eslint-disable */
        console.log(result.current.tree)
        
        expect(result.current.tree).toBe(myJson)
    })

    it('creates a new file if created',()=>{
      
    })
    
})