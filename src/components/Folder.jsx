import React, { useState } from 'react';
import image from './folder.png';

const Folder = () => {
  
  const [data,setData]=useState({
          id:"1",
          name: "root",
          isFolder: true,
          open:false,
          items: [
            {
              id:"2",
              name: "public",
              isFolder: true,
              items: [
                {
                  id:"3",
                  name: "public nested 1",
                  isFolder: true,
                  items: [
                    {
                      id:"4",
                      name: "index.html",
                      isFolder: false,
                      items: []
                    },
                    {
                      id:"5",
                      name: "hello.html",
                      isFolder: false,
                      items: []
                    }
                  ]
                },
                {
                  id:"6",
                  name: "public_nested_file",
                  isFolder: false,
                  items: []
                }
              ]
            },
            {
              id:"7",
              name: "src",
              isFolder: true,
              items: [
                {
                  id:"8",
                  name: "App.js",
                  isFolder: false,
                  items: []
                },
                {
                  id:"9",
                  name: "Index.js",
                  isFolder: false,
                  items: []
                },
                {
                  id:"10",
                  name: "styles.css",
                  isFolder: false,
                  items: []
                }
              ]
            },
            {
              id:"11",
              name: "package.json",
              isFolder: false,
              items: []
            }
          ]
        })

  const getNewStruct=(node=data,id)=>{
       if(node.isFolder && node.id===id){
          
       }   
  }

  const toggleOpen=(id)=>{
      
  
  }

  return (<>
   <div style={{display: "flex" }}>
    <img  id={data.id} onClick={()=>{toggleOpen(data.id)}}  src ={image} alt="folder" width={50} height={50}/>
    <div style={{paddingTop:"1rem"}} id={data.id}>{data.name}</div>
    {
      data.open ? <>
      
       <div>Open</div>
      
      </>:''
    }
    </div> 
    </>
  )
}

export default Folder