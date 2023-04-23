import { useState } from 'react';

const Folder = ({data}) => {
     const [open,setOpen]=useState(false)
    const [showInput,setShowInput]=useState({
      visible: false,
      isFolder:false
    })

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
              <input onKeyDown={(e)=>{if(e.key==="Enter")console.log("Enter pressed")}} autoFocus type="text" onBlur={()=>{setShowInput({...showInput,visible:false})}}/>
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