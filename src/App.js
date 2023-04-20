
import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import useTree from './hooks/useTree';

function App() {

    const{tree:data,getToggledTree,setTree,addNewNode} =  useTree(treeData)
    const inputRef = useRef(null);
    const [type,setType]=useState('')


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
              addNewNode({
                id:uuid(),
                name: value,
                type,
                isFolder:(type==='folder')
              },id)
           }
          inputRef.current.value=''
        }
      };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);


    const getRenderedTree =(parent,marginLeft=1)=>{
      
      if(!parent)return;

      const newMargin=++marginLeft

      return( <div key={parent.id}  style={{marginLeft:`${newMargin}rem`}}>
        {parent.isFolder? <> 
              <Folder  data={parent} inputRef={inputRef} />
              {
                parent.open?parent.items.map(item=> getRenderedTree(item,newMargin)):''
              }
            </>
            : 
               <File data={parent}/> 
        }
      </div>)
    }
  
  const handleClick=({target})=>{
         
          
        setTree(getToggledTree(target.id))
     
   
     }

  return (
    <div onClick={handleClick} style={{margin:"4rem"}}>
      {
          getRenderedTree(data)
      } 
      </div>

  );
}

export default App;
