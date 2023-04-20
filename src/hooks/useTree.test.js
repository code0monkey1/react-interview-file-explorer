import { renderHook } from '@testing-library/react';
import useTree from './useTree';

describe('first',()=>{
    

    it('first-test',()=>{
      const {result} = renderHook(useTree)
      expect(result.current.tree).toEqual(undefined)
    })

    it('gets the json object',()=>{
        const myJson={
          file:"whatever",
          folder:"whatever"
        }

        const {result} = renderHook(useTree,{initialProps:{tree:myJson}})
        /* eslint-disable */
        console.log(result.current.tree)
        
        expect(result.current.tree).toBe(myJson)
    })
    
})