import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
const Folder = ({data,addNewNode}) => {

  
    const [open,setOpen]=useState(false)
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
    }
   
  

  }
   return<>
     <div 
      onClick={()=>{setOpen(!open)}}  >    
      <div >
          <div style={{width:"20rem",display:"flex",justifyContent:"space-between"}}>
            <span>{data.isFolder?<>🗂️</>:<>📄</>}{data.name}</span>
          <div>
                <button  onClick={(e)=>{handleNewFolder(e,false)}}>Add File +</button>
                <button  onClick={(e)=>{handleNewFolder(e,true)}}>Add Folder +</button>
            </div>  
          </div>
        { showInput.visible && <div style={{paddingLeft:"2rem"}}>
            <span>{showInput.isFolder?<>🗂️</>:<>📄</>}
              <input onKeyDown={(e)=>addNode(e,data.id)} ref={inputRef} autoFocus type="text" onBlur={()=>{setShowInput({...showInput,visible:false})}}/>
            </span> 
          </div>
         }

    </div>
    </div>
     
      <div style={styles.foldersStyle}>
        {data.items.map((item) =><Folder key={item.id} data={item} />) }
      </div>
   </>
  
}

export default Folder


// const Item=({data})=>{

// console.log(JSON.stringify(showInput,null,2))
//  return 
// }