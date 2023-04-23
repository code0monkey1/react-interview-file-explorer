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
  visible: false,
  isFolder:false
})
 return <div >
     <div style={{width:"20rem",display:"flex",justifyContent:"space-between"}}>
        <span>{data.isFolder?<>🗂️</>:<>📄</>}{data.name}</span>
        <div onClick={(e)=>{e.stopPropagation();setShowInput({...showInput,visible:!showInput.visible})}} style={{display:data.isFolder?"block":"none"}}>
            <button onBlur={()=>{setShowInput({...showInput,visible:false})}} onClick={()=>{setShowInput({...showInput,isFolder:false})}}>Add File +</button>
            <button onBlur={()=>{setShowInput({...showInput,visible:false})}} onClick={()=>{setShowInput({...showInput,isFolder:true})}}>Add Folder +</button>
        </div>  
      </div>
      <div style={{paddingLeft:"2rem",display:showInput.visible?"block":"none"}}>
         <input type="text"/>
      </div>

    </div>
}