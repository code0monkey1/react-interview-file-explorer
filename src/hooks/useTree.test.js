import { act, renderHook } from '@testing-library/react';
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

    it('creates a new file/folder in the tree', ()=>{
    
        
        let originalTree ={
          id:"1",
          name: "root",
          isFolder: true,
          items: [{

          id:"2",
          name: "root",
          isFolder: true,
          items:[]
          }
          ,{
          id:"3",
          name: "root",
          isFolder: true,
           items:[]
          }
        ]
        }

         const newNode={id:"5",name:"newNote",isFolder:false,items:[]}

        let resultTree={ 
          id:"1",
          name: "root",
          isFolder: true,
          items: [{

          id:"2",
          name: "root",
          isFolder: true,
          items:[]
          }
          ,{
          id:"3",
          name: "root",
          isFolder: true,
           items:[newNode]
          }
        ]
        }
        const {result} = renderHook(useTree,{initialProps:originalTree})
        
        
          act(() => {
            result.current.addNewNode("3",newNode)
          })
 
          expect(result.current.tree).toEqual(resultTree)

    })

    it('toggles the current nodes open attribute',()=>{
        const headNode={ id:"1",
                         name: "root",
                        isFolder: true,
                        items:[{
                          id:"2",
                         name: "root",
                        isFolder: true,
                        items:[],
                      }],
                       }

        const {result} = renderHook(useTree,{initialProps:headNode})

        act(()=>{
          result.current.toggleOpen("2")
        })   
        
        expect(JSON.stringify(result.current.tree)).toEqual(JSON.stringify({...headNode,items:[{
                          id:"2",
                         name: "root",
                        isFolder: true,
                        items:[],
                        open:true
                      }]}))
    })

    it('removes node if id is provided',()=>{
           const headNode={ id:"1",
                         name: "root",
                        isFolder: true,
                        items:[{
                          id:"2",
                         name: "inner",
                        isFolder: true,
                        items:[],
                      }],
                       }

        const {result} = renderHook(useTree,{initialProps:headNode})

           act(()=>{
          result.current.removeNode("2")
        })  
        
        expect(result.current.tree).toEqual({id:"1",
                        name: "root",
                        isFolder: true,
                        items:[]}
                        )
    })
    
})