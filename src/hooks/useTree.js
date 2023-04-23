
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

const removeNode = (id) =>{
    
  const head=JSON.parse(JSON.stringify(tree));

  if(head.id===id)return<></>

 const indexToRemove = head.items.findIndex(obj => obj.id === id);

// Remove the object at the specified index
if (indexToRemove !== -1) {
  head.items.splice(indexToRemove, 1);
  return
}

 for(const item of head.items){
     remove(id,item)
 }
return head;
}

const remove=(id,head)=>{

   const foundItem = head.items.find(item => item.id===id)

  if(foundItem){
    console.log("found item",foundItem)
    head.items = head.items.filter(item => item.id!==id)
    return
  }

}

const addNode=(id,newNode,currentNode) =>{
       
      if(id === currentNode.id){
          currentNode.items.unshift(newNode);
          return;
      }
      
      for ( const node of currentNode.items)
          addNode(id,newNode,node)
      
}

const toggleOpen=(id)=>{
       
        if(!tree)return

          const head=JSON.parse(JSON.stringify(tree));
                 
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
  addNewNode,
  removeNode
 }

}

export default useTree