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
       
        // the data attached to `initialProps` value is the data that's passed into the useTree hook , like so => useTree(myData). You cannot pass the data directly , like so => useTree(myData )

        expect(result.current.tree).toBe(myData)
    })

    it('creates a new file if created',()=>{
      
    })
    
})