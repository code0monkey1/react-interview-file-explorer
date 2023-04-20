
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
    const [id,setId] = useState(null)
    const [type,setType]=useState('')


    useEffect(() => {
      const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
          console.log('Clicked outside');
           const value = inputRef.current.value.trim()
           console.log("The value is ",value)
           if(value){
              // addNewNode({
              //   id:uuid(),
              //   name: value,
              //   isFolder:inputRef.current.
              // })
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
         
       
      if(target.name === 'file' || target.name === 'folder'){
        console.log("the identity `id` is ",target.dataset.id)
        console.log("the type `type` is ",target.current.type)
        setId(target.dataset.id)
        return;
      }
      else{
          
        setTree(getToggledTree(target.id))
        
      }
   
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
