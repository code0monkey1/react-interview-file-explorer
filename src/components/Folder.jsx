import image from './folder.png';

const Folder = ({data,toggleOpen}) => {
  
  
   const copy=JSON.parse(JSON.stringify(data));
  console.log("copy",copy)
  return (<>
   <div style={{display: "flex" ,"justifyContent": "space-between"}}>
    <div style={{display: "flex" }}>
      <img  id={data.id} onClick={()=>{toggleOpen(data.id)}}  src ={image} alt="folder" width={50} height={50}/>
      <div style={{paddingTop:"1rem"}} id={data.id}>{data.name}</div>
      </div> 
    </div>
    <div style={{display: "flex"  }}>
      <button>Add File</button>
      <button style={{marginLeft:"0.5rem"}}>Add Folder</button>
    </div>
    </>
  )
}

export default Folder