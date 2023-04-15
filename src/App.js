
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import useTree from './hooks/useTree';

function App() {

    const{tree:data,getToggledTree,setTree} =  useTree(treeData)

    const getRenderedTree =(parent,marginLeft=1)=>{
      
      const newMargin=marginLeft+1
      return parent && ( <div key={parent.id}  style={{marginLeft:`${newMargin}rem`}}>
        {parent.isFolder? <> 
              <Folder  data={parent}/>
              {
                parent.open?parent.items.map(item=> getRenderedTree(item)):''
              }
            </>
            : 
               <File data={parent}/> 
        }
      </div>)
    }
  
  const toggler=(event)=>{

      const newTree=getToggledTree(event)

      setTree(newTree)
  }

  return (
    <div onClick={toggler} style={{margin:"4rem"}}>
      {
          getRenderedTree(data)
      } 
      </div>

  );
}

export default App;
