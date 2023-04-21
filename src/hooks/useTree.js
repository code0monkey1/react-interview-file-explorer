
import { useEffect, useState } from "react";

const useTree=(treeData)=>{

     const [tree,setTree]=useState(null)

     useEffect(() => {
     
       setTree(treeData)
    }, [treeData])
     
/**
 * @id : string eg:"2",
 * @newNode : { 
 *     id:string,
 *     name: string,
 *     isFolder: boolean
 *    }
 * 
 */
const addNewNode = (id,newNode) =>{
      
      const head=JSON.parse(JSON.stringify(tree));

      addNode(id,newNode,head);

      setTree(head)
    
}

const addNode=(id,newNode,currentNode) =>{
       
      if(id === currentNode.id){
         
          currentNode.items.push(newNode);
          return;
      }
      
      for ( const node of currentNode.items)
          addNode(id,newNode,node)
      
}

const toggleOpen=(id)=>{
       
        if(!tree)return

          console.log("The tree is",JSON.stringify(tree,null,2))
          const head=JSON.parse(JSON.stringify(tree));

          console.log("The head is",JSON.stringify(head,null,2));
                 
          toggleItem(head,id)

          setTree(head)
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
  toggleOpen,
  tree,
  setTree,
  addNewNode
 }

}

export default useTree