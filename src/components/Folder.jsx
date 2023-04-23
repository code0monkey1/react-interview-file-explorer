import { useState } from 'react';

const Folder = ({data}) => {
   const [open,setOpen]=useState(false)
  return<>

  <div onClick={()=>{setOpen(!open)}}>
    <span>{data.isFolder?<>🗂️</>:<>📄</>}</span>
    {data.name}
  </div> 

  <div  style={{paddingLeft:"2rem",display:open?"none":"block"}}>
   {data.items.map((item) =><Folder key={item.id} data={item} />) }
  </div>
 
  </>
  
}

export default Folder


