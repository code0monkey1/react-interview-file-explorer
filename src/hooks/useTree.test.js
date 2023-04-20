import { renderHook } from '@testing-library/react';
import folderData from '../data/folderData';
import useTree from './useTree';
describe('file-explorer',()=>{
    

    it('first-test',()=>{
      const {result} = renderHook(useTree)
      expect(result.current.tree).toEqual(undefined)
    })

    it('gets the initial treeData',()=>{
      
        const myData=folderData
        const {result} = renderHook(useTree,{initialProps:myData})
        
      
        console.log(result.current.tree)
        
        expect(result.current.tree).toBe(myData)
    })

    it('creates a new file if created',()=>{
      
    })
    
})