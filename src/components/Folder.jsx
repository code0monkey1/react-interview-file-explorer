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
      onClick={()=>{setOpen(!open)}} 
      style={{width:"20rem",display:"flex",justifyContent:"space-between"}} >    
        <Item data={data} open={open}/>

     </div>
     
      <div style={styles.foldersStyle}>
        {data.items.map((item) =><Folder key={item.id} data={item} />) }
      </div>
   </>
  
}

export default Folder


const Item=({data,open})=>{
const [showInput,setShowInput]=useState(false)


 return<>
  
      <span>{data.isFolder?<>🗂️</>:<>📄</>}{data.name}</span>
      <div onClick={(e)=>{e.stopPropagation()}} style={{display:data.isFolder?"block":"none"}}>
          <button>Add File +</button>
          <button>Add Folder +</button>
      </div>
      <div style={{paddingLeft:"2rem"}}>
        <input type="text"/>
      </div>
    </>
}