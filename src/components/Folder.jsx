import image from './folder.png';

const Folder = ({data,toggleOpen}) => {
  
  
       const copy=JSON.parse(JSON.stringify(data));
  console.log("copy",copy)
  return (<>
   <div style={{display: "flex" }}>
    <div style={{display: "flex" }}>
      <img  id={data.id} onClick={()=>{toggleOpen(data.id)}}  src ={image} alt="folder" width={50} height={50}/>
      <div style={{paddingTop:"1rem"}} id={data.id}>{data.name}</div>
      </div> 
    </div>
    </>
  )
}

export default Folder