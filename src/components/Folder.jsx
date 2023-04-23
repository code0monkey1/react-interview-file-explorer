import { useState } from 'react';

const Folder = ({data}) => {
     const [open,setOpen]=useState(false)

  const styles={
    foldersStyle:{
      paddingLeft:"2rem",
      display:open?"none":"block" 
    },
    itemStyle:{
        display:"flex",
        justifyContent:"space-between",
    }
    
  }
   return<>
     <div 
      onClick={()=>{setOpen(!open)}}  >    
        <Item data={data} open={open}/>
     </div>
     
      <div style={styles.foldersStyle}>
        {data.items.map((item) =><Folder key={item.id} data={item} />) }
      </div>
   </>
  
}

export default Folder


const Item=({data})=>{
const [showInput,setShowInput]=useState({
  isFolder:false,
  visible:false
})
 return <>
     <div style={{width:"20rem",display:"flex",justifyContent:"space-between"}}>
        <span>{data.isFolder?<>🗂️</>:<>📄</>}{data.name}</span>
        <div onClick={(e)=>{e.stopPropagation();setShowInput(!showInput)}} style={{display:data.isFolder?"block":"none"}}>
            <button onClick={()=>setShowInput({isFolder:false,visible:!showInput.visible})}>Add File +</button>
            <button onClick={()=>setShowInput({isFolder:true,visible:!showInput.visible})}>Add Folder +</button>
        </div>  
      </div>
      <div style={{paddingLeft:"2rem",display:showInput?"block":"none"}}>
        <span>{showInput.isFolder?<>🗂️</>:<>📄</>}<input type="text"/></span>  
      </div>

    </>
}