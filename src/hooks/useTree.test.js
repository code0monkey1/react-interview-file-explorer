import { act, renderHook } from '@testing-library/react';
import folderData from '../data/folderData';
import useTree from './useTree';
describe('useTree hook',()=>{
   
    it('has the starting state as undefined',()=>{
      const {result} = renderHook(useTree)
      expect(result.current.tree).toEqual(undefined)
    })

    it('has the passed in state when initialized',()=>{ 
      
        const myData=folderData
        const {result} = renderHook(useTree,{initialProps:myData})
       
        // the data attached to `initialProps` value is the data that's passed into the useTree hook , like so => useTree(myData). You cannot pass the data directly , like so => useTree(myData )

        expect(result.current.tree).toBe(myData)
    })

    it('adds a new file in the tree, with name as "newNote"', ()=>{
    
        
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
          items: [
            newNode,
            {

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
        const {result} = renderHook(useTree,{initialProps:originalTree})
        
        
          act(() => {
            // needs to be wrapped in act , as the state is changed  in the process
            result.current.addNewNode("1",newNode)
          })
 
          expect(result.current.tree).toEqual(resultTree)

    })

    it('removes node with the given "id"',()=>{
           const headNode={ id:"1",
                         name: "root",
                        isFolder: true,
                        items:[{
                          id:"2",
                         name: "inner",
                        isFolder: true,
                        items:[],
                      },
                    {
                          id:"3",
                         name: "inner",
                        isFolder: true,
                        items:[
                          {
                          id:"4",
                         name: "inner",
                        isFolder: true,
                        items:[],
                      },
                      {
                          id:"5",
                         name: "inner",
                        isFolder: true,
                        items:[],
                      }
                        ],
                      }],
                       }

        const {result} = renderHook(useTree,{initialProps:headNode})

           act(()=>{
          result.current.removeNode("4")
        })  
        
        expect(result.current.tree).toEqual({ id:"1",
                         name: "root",
                        isFolder: true,
                        items:[{
                          id:"2",
                         name: "inner",
                        isFolder: true,
                        items:[],
                      },
                    {
                          id:"3",
                         name: "inner",
                        isFolder: true,
                        items:[
                          {
                          id:"5",
                         name: "inner",
                        isFolder: true,
                        items:[],
                      }
                        ],
                      }],
                       })
    
        })
        it('updates the name of the node with the given "id"',()=>{
             
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
           items:[]
          }
        ]
        }
        const {result} = renderHook(useTree,{initialProps:resultTree})
        
        
          act(() => {
            result.current.updateNode("2","chinu")
          })

          expect(result.current.tree).toEqual({ 
          id:"1",
          name: "root",
          isFolder: true,
          items: [{

          id:"2",
          name: "chinu",
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
        })


 

        })

})