import React from 'react'
import file from './file.png'
const File = ({data}) => {
  return(
    <div style={{display: "flex",marginLeft:"1rem" }}>
      <img  id={data.id}  src ={file} alt="folder" width={50} height={50}/>
      <div style={{paddingTop:"1rem"}} id={data.id}>{data.name}</div>
      </div> 
    )
}

export default File