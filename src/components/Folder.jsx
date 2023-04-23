import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
const Folder = ({data,addNewNode,removeNode,updateNode}) => {

  
    const [open,setOpen]=useState(false)
    const [updating,setUpdating]=useState(false)
    const [showInput,setShowInput]=useState({
      visible: false,
      isFolder:false
    })
    const inputRef =useRef()

  const styles={
    foldersStyle:{
      paddingLeft:"2rem",
      display:open?"none":"block" 
    },
    itemStyle:{
        display:"flex",
        justifyContent:"space-between",
    },
 
  }

  const handleNewFolder=(e,isFolder)=>{
    e.stopPropagation()
    setOpen(true)
    setShowInput({
      visible:!showInput.visible,
      isFolder
    })
   
  }

  const addNode=(e,id)=>{
    
    if(e.key==="Enter" && inputRef.current.value.trim()){
        
       const newNode={
         id:uuid(),
         name:inputRef.current.value,
         isFolder:showInput.isFolder,
         items:[]
       }
        addNewNode(id+"",newNode)

        inputRef.current.value=''
        inputRef.current.blur();
    }

  }

  const renameNode=(e,id)=>{

      if(e.key==="Enter" && inputRef){
              updateNode(id,inputRef.current.value)
              inputRef.current.value=''
              inputRef.current.blur(); 
         }
      }
      


   return<>
     <div 
      onClick={()=>{setOpen(!open)}}  >    
      <div >
          <div style={{width:"30rem",display:"flex",justifyContent:"space-between"}}>
            <span>{data.isFolder?<>🗂️</>:<>📄</>}
             {updating?<input
              ref={inputRef}
              autoFocus
              onBlur={()=>{setUpdating(false)}}
              onKeyDown={(e)=>{ renameNode(e,data.id)} }></input>:data.name}
              <button onClick={()=>setUpdating(true)}>Update Name</button>
            </span>
          <div style={{display:data.isFolder?"block":"none"}}>
                <button  onClick={(e)=>{handleNewFolder(e,false)}}>Add File +</button>
                <button  onClick={(e)=>{handleNewFolder(e,true)}}>Add Folder +</button>
                
          </div> 
          <button onClick={(e)=>{e.stopPropagation();removeNode(data.id)}}>  Delete - </button> 
          </div>
        { showInput.visible && <div style={{paddingLeft:"2rem"}}>
            <span>{showInput.isFolder?<>🗂️</>:<>📄</>}
              <input onKeyDown={(e)=>addNode(e,data.id)}
               ref={inputRef}
                autoFocus 
                type="text" 
              onBlur={()=>{setShowInput({...showInput,visible:false})}}/>
            </span> 
          </div>
         }
    </div>
    </div>
     
      <div style={styles.foldersStyle}>
        {data.items.map((item) =><Folder key={item.id} data={item} addNewNode={addNewNode} removeNode={removeNode} updateNode={updateNode} />) }
      </div>
   </>
  
}

export default Folder