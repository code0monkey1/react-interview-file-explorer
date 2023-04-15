import { useState } from 'react';
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';
import foldersData from './data/folderData';

function App() {

  const [data,setData]=useState(foldersData)
  const [clickedButtonId, setClickedButtonId] = useState(1);

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

          setClickedButtonId(event.target.id);
            
          function toggle(head,clickedButtonId){
             
            if(head.isFolder && head.id===clickedButtonId) {
                 head.open=!head.open;
              
                 closeFolders(head.items)            
            }               
                          
             for (let item of head.items)
                  toggle(item,clickedButtonId)      
          }
          toggle(head,clickedButtonId)

          setData(head)
  }
   
  
    const renderTree =(parent,marginLeft=1)=>{
      
      const newMargin=marginLeft+1
      
      if (parent.isFolder){
    
        return <><div    key={parent.id}  style={{marginLeft:`${newMargin}rem`}}>

        
            <Folder  data={parent}/>
            {
              parent.open?parent.items.map(item=> renderTree(item)):''
            }
            </div>
        </>
      }
      else{
     
            return <>
            <div style={{marginLeft:`${newMargin}rem`}}>
               <File data={parent}/> 
             </div>
          </>
      }
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
