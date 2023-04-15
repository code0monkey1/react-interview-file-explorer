import { useState } from 'react';
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';
import foldersData from './data/folderData';

function App() {

  const [data,setData]=useState(foldersData)

          
  const toggleOpen=(id)=>{

          const head=JSON.parse(JSON.stringify(data));
            

          function toggle(head,id){
              if(head.isFolder && head.id===id) {
                head.open=!head.open
                console.log("HEAD CHANGING",JSON.stringify(head,null,2));
              }
                 
                for (let item of head.items)
                  toggle(item,id)     
              
          }
          
           toggle(head,id)

          setData(head)

          console.log("changed head is",JSON.stringify(head,null,2))
  }

  
    const renderTree =(parent)=>{
    
      if (parent.isFolder && parent.open){
        return <>
            <Folder/>
            {
              parent.items.map(item=> renderTree(item))
            }
        </>
      }
      else{
           return <File/>
      }
    }

    
  return (
  <div style={{margin:"4rem"}}>
      <Folder/>
      </div>

  );
}

export default App;
