import { useState } from 'react';
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import getToggledTree from './utils/toggleOpen';

function App() {

  const [data,setData]=useState(treeData)

    const getRenderedTree =(parent,marginLeft=1)=>{
      
      const newMargin=marginLeft+1
      return ( <div key={parent.id}  style={{marginLeft:`${newMargin}rem`}}>
        {parent.isFolder? <> 
              <Folder  data={parent}/>
              {
                parent.open?parent.items.map(item=> getRenderedTree(item)):''
              }
            </>
            : 
               <File data={parent}/> 
        }
      </div>)

    }
  
  const toggler=(event,data)=>{

      const newTree=getToggledTree(event,data)

      setData(newTree)
  }
    
  return (
    <div onClick={(event)=>toggler(event,data)} style={{margin:"4rem"}}>
      {
          getRenderedTree(data)
      } 
      </div>

  );
}

export default App;
