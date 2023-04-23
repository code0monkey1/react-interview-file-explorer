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
    }
    
  }
   return<>
     <div 
      onClick={()=>{setOpen(!open)}}  >    
      <div >
          <div style={{width:"20rem",display:"flex",justifyContent:"space-between"}}>
            <span>{data.isFolder?<>🗂️</>:<>📄</>}{data.name}</span>
          <div>
                <button  onClick={()=>{setShowInput({...showInput,isFolder:false})}}>Add File +</button>
                <button  onClick={()=>{setShowInput({...showInput,isFolder:true})}}>Add Folder +</button>
            </div>  
          </div>
        { showInput.visible && <div style={{paddingLeft:"2rem"}}>
            <span>{showInput.isFolder?<>🗂️</>:<>📄</>}
              <input type="text"/>
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