import { useState } from 'react';

const Folder = ({data}) => {
   const [open,setOpen]=useState(false)
  const styles={
    foldersStyle:{
      paddingLeft:"2rem",
      display:open?"none":"block" 
    }
  }
   return<>

      <div onClick={()=>{setOpen(!open)}}>
        <span>{data.isFolder?<>🗂️</>:<>📄</>}</span>
        {data.name}
      </div> 

      <div  style={styles.foldersStyle}>
      {data.items.map((item) =><Folder key={item.id} data={item} />) }
      </div>
    
   </>
  
}

export default Folder


