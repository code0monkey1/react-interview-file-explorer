import { useState } from 'react';
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';

function App() {

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

  
    const renderTree =(parent)=>{
    
      if (parent.isFolder){
        return <>
            <Folder/>
            {
              parent.items.map(item=> renderTree(item))
            }
        </>
      }
      else{
           return <File/>
      }
    }

    
  return (
  <div style={{margin:"4rem"}}>
      <Folder/>
      </div>

  );
}

export default App;
