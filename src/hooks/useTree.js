
import { useEffect, useState } from "react";

const useTree=(treeData)=>{

     const [tree,setTree]=useState(null)

     useEffect(() => {
     
       setTree(treeData)
    }, [])
     

const addNode = (node) =>{
    
}
const getToggledTree=(event)=>{
        
          const head=JSON.parse(JSON.stringify(tree));

          const id=event.target.id

          console.log("The id obtained is",event.target.id);
            
         
          toggleItem(head,id)

          return head;
  }

function toggleItem(head,id){
             
            if(head.isFolder && head.id===id) {
                 head.open=!head.open;
              
                 closeItems(head.items)            
            }               
                          
             for (let item of head.items)
                  toggleItem(item,id)      
          }
   
function closeItems(items){  
  
      items.open=false;

      items.forEach(subItem=>{
               if(subItem.isFolder){
                  subItem.open=false;
                  closeItems(subItem.items)
              }
      })
      
 }

 return{
  getToggledTree,
  tree,
  setTree
 }

}

export default useTree