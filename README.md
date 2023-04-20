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
