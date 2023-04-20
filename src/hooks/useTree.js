
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
const addNewNode = (id,newNode) =>{
      
      const head=JSON.parse(JSON.stringify(tree));

      addNode(id,newNode,head);

      setTree(head)
    
}

const addNode=(id,newNode,currentNode) =>{
       
      if(id === currentNode.id){
          console.log("id is",id ," but current node is",JSON.stringify(currentNode,null,2))
          currentNode.items.push(newNode);
          return;
      }
      
      for ( const node of currentNode.items)
          addNode(node.id,newNode,node)
      

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
  addNewNode
 }

}

export default useTree