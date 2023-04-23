
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
         
    removeNodeWithId(id,head)
    
    setTree(head)
}

const removeNodeWithId=(id,head)=>{
    
      // Find the index of the object to remove
      const indexToRemove = head.items.findIndex(obj => obj.id === id);

      // Remove the object at the specified index
      if (indexToRemove !== -1) {
        head.items.splice(indexToRemove, 1);
        return;
      }

      for(const node of head.items)
           removeNodeWithId(id,node)
      
}

const addNode=(id,newNode,currentNode) =>{
       
      if(id === currentNode.id){
          currentNode.items.unshift(newNode);
          return;
      }
      
      for ( const node of currentNode.items)
          addNode(id,newNode,node)
      
}


   


 return{
  tree,
  addNewNode,
  removeNode
 }

}

export default useTree