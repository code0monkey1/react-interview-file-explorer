import { useState } from 'react';
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';
import foldersData from './data/folderData';

function App() {

  const [data,setData]=useState(foldersData)

 const closeFolders =(items)=>{  
  
      items.open=false;

      for(let subItem of items){
         if(subItem.isFolder){
            subItem.open=false;
             closeFolders(subItem.items)
         }
      }
 }
 
  const toggleOpen=(event)=>{
        
          const head=JSON.parse(JSON.stringify(data));

          const id=event.target.id

          console.log("The id obtained is",event.target.id);
            
         
          toggle(head,id)

          setData(head)
  }

   function toggle(head,id){
             
            if(head.isFolder && head.id===id) {
                 head.open=!head.open;
              
                 closeFolders(head.items)            
            }               
                          
             for (let item of head.items)
                  toggle(item,id)      
          }
   
  
    const renderTree =(parent,marginLeft=1)=>{
      
      const newMargin=marginLeft+1
      return (parent.isFolder?  

      (<div key={parent.id}  style={{marginLeft:`${newMargin}rem`}}>
            <Folder  data={parent}/>
            {
              parent.open?parent.items.map(item=> renderTree(item)):''
            }
      </div>) 
            : 
      (<div style={{marginLeft:`${newMargin}rem`}}>
               <File data={parent}/> 
      </div>)

      )
      
    }

    
  return (
  <div onClick={toggleOpen} style={{margin:"4rem"}}>
      {
          renderTree(data)
      }
      </div>

  );
}

export default App;
