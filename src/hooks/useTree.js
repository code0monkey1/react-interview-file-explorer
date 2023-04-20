
import { useEffect, useState } from "react";

const useTree=(treeData)=>{

     const [tree,setTree]=useState(null)

     useEffect(() => {
     
       setTree(treeData)
    }, [treeData])
     
/**
 * @newNode : { 
 *     id:"2",
 *         name: "root",
 *        isFolder: true
 *    }
 */
const getAddedTree = (id,newNode) =>{
      
      const head=JSON.parse(JSON.stringify(tree));

      addNode(head)(id,newNode,head);

      return head;
    
}

const addNode=(head)=>(id,newNode,currentNode) =>{
   
     if(id===currentNode.id){
           
          currentNode.items.push(newNode);

          setTree(head) 
          return; 
      }

      for ( let node of currentNode.items)
          addNode(head)(node.id,newNode,node)
      
     
}


const getToggledTree=(id)=>{
        
          const head=JSON.parse(JSON.stringify(tree));
                 
          toggleItem(head,id)

          return head;
  }

function toggleItem(head,id){
             console.log("The id is: ",id)
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
  setTree,
  addNode
 }

}

export default useTree