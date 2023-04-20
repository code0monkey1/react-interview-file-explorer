# Create A File Explorer

![Folder](./pics/folder-structure.jpg "folder structure to be created")


## Features:
1. Must get folder structure from `json` data and display it.
1. Must expand-contract the folder structure as per interaction with it
1. Should be able to create new files and folder on user interaction.


### *Creating a useTree hook*



### *Testing a react hook ( testing useTree )*

1. Use the `renderHook`  for rendering a hook.
   
    
      ```javascript

          import { renderHook } from '@testing-library/react'

          it('first-test',()=>{
          // the `result` returns the result of the rendering process of the hook

          const {result} = renderHook(useTree)

          // Here , the `result.current` holds the return value of the hook 

          expect(result.current.tree).toEqual(undefined)
        })

      ```
1. Passing the `initial data` into the hook and testing that if it is returned
    
   ``` javascript 
      it('gets the initial data',()=>{
      
        const myJson={
          file:"whatever",
          folder:"whatever"
        }
        // the initial data to be sent into the useTree hook , is sent as the 
        // second argument , as an object, `initialProps` holding the initial data
        const {result} = renderHook(useTree,{initialProps:myJson})
        
        console.log(result.current.tree)
        
        expect(result.current.tree).toBe(myJson)
    })
  ```
1. Causing change is `state` using the `act` function .
   
> Whenever you change the state of the hook using a function , you must wrap that function in `act`

  