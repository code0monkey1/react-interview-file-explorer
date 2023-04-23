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

      <div onClick={()=>{setOpen(!open)}} style={{width:"20rem",backgroundColor:"grey"}} >
        <span>{data.isFolder?<>🗂️</>:<>📄</>}</span>
        {data.name}
    
          <span>Add File</span>
          <span>Add Folder</span>
    
      </div> 

      <div  style={styles.foldersStyle}>
      {data.items.map((item) =><Folder key={item.id} data={item} />) }
      </div>
    
   </>
  
}

export default Folder


