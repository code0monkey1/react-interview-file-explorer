
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


const removeNode = (id)=>{
    
     const head=JSON.parse(JSON.stringify(tree));
    
     if(head.id===id) {
      alert("Cannot Delete Root Node")
      return;
    }
         
    for(const node of head.items){
        const itemFound= remove(id,node.items)
         if(itemFound)return;
    }
      
    setTree(head)
}

const remove=(id,items)=>{

    const indexToRemove=items.findIndex(obj => obj.id === id)

    if(indexToRemove!==-1){
      items.splice(indexToRemove,1)
      return
    }
    return indexToRemove!==-1
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