
import { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import useTree from './hooks/useTree';

function App() {

    const{tree:data,toggleOpen,addNewNode} =  useTree(treeData)
    const inputRef = useRef(null);
 
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
          console.log('Clicked outside');
           const value = inputRef.current.value.trim()
           console.log("The value is ",value)

            const id = inputRef.current.getAttribute('data-id');
            const type = inputRef.current.getAttribute('data-type');

            console.log(`id: ${id}, type: ${type}`);
            
           if(value){
            
            const newNode={
                id:uuid(),
                name: value,
                type,
                isFolder:(type==='folder'),
                items:[]
              }
              
              console.log("The new node to be inserted is",JSON.stringify(newNode,null,2))
              
              addNewNode(id+'',newNode)
           }
          inputRef.current.value=''
        }
      };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef,addNewNode]);


    const getRenderedTree =(node)=>{
      
      if(!node) return
     
      return( <div key={node.id}  style={{marginLeft:`2rem`}}>
        {
        node.isFolder? <> 
              <Folder  data={node} inputRef={inputRef} />
                {
                  node.open?node.items.map(item=> getRenderedTree(item)):''
                }
            </>
            : 
               <File data={node}/> 
        }
      </div>)
    }
  
  console.log("The current state is",JSON.stringify(data,null,2))
  
  return (
    <div onClick={({target})=> {toggleOpen(target.id)}} style={{margin:"2rem"}}>
      {
          getRenderedTree(data)
      } 
      </div>

  );
}

export default App;
