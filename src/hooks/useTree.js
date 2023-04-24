
import { useEffect, useState } from "react";
import { getDeepCopy } from "../utils/copy";

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

const addNewNode = (id,newNode) =>setTree(addNode(id,newNode,getDeepCopy(tree)))

const addNode=(id,newNode,currentNode) =>{
       
      if(id === currentNode.id){
          currentNode.items.unshift(newNode)
          return currentNode;
      }
      
      for ( const node of currentNode.items)
          addNode(id,newNode,node)
      
      return currentNode;
}

const updateNode=(id,newName)=> setTree(update(id,newName,getDeepCopy(tree)))


const update =(id,newName,head)=>{
      // check if the head has the id , if so , replace it with the new name
      if(id===head.id){
        head.name=newName
        return head // get the head if the root component is being reamed
      }
     // else , go the all the child items, and do the same thing
      for( const node of head.items)
        update(id,newName,node)
      
      return head // this is done, so as to get back the head at the end
}

const removeNode =(id)=>{
    
     const head=getDeepCopy(tree)
    
     if(head.id===id) {
      alert("Cannot Delete Root Node")
      return;
    }

    setTree(removeNodeWithId(id,head))
}

const removeNodeWithId=(id,head)=>{
    
      // Find the index of the object to remove
      const indexToRemove = head.items.findIndex(obj => obj.id === id);

      // Remove the object at the specified index
      if (indexToRemove !== -1) {
        head.items.splice(indexToRemove, 1);
        return head;
      }

      for(const node of head.items)
           removeNodeWithId(id,node)
      
      return head;
}

 return{
  tree,
  addNewNode,
  removeNode,
  updateNode
 }

}

export default useTree