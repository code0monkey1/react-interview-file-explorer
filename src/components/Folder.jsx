import React, { useState } from 'react';
import image from './folder.png';

const Folder = () => {
  
  const [data,setData]=useState({
          id:"10",
          name: "root",
          isFolder: true,
          open:false,
          items: [
            {
              id:"2",
              name: "public",
              isFolder: true,
              open:false,
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
                  isFolder: true,
                  open: false,
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

          
  const toggleOpen=(id)=>{

          const head=JSON.parse(JSON.stringify(data));
            

          function toggle(head,id){
              if(head.isFolder && head.id===id) {
                head.open=!head.open
                console.log("HEAD CHANGING",JSON.stringify(head,null,2));
              }
                 
                for (let item of head.items)
                  toggle(item,id)     
              
          }
          
           toggle(head,id)

          setData(head)

          console.log("changed head is",JSON.stringify(head,null,2))
  }

       const copy=JSON.parse(JSON.stringify(data));
  console.log("copy",copy)
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