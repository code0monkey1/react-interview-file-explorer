
import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import useTree from './hooks/useTree';

function App() {

    const{tree:data,getToggledTree,setTree,addNewNode} =  useTree(treeData)

    const getRenderedTree =(parent,marginLeft=1)=>{
      
      if(!parent)return;

      const newMargin=++marginLeft

      return( <div key={parent.id}  style={{marginLeft:`${newMargin}rem`}}>
        {parent.isFolder? <> 
              <Folder  data={parent} />
              {
                parent.open?parent.items.map(item=> getRenderedTree(item,newMargin)):''
              }
            </>
            : 
               <File data={parent}/> 
        }
      </div>)
    }
  

  return (
    <div onClick={({target})=>{setTree(getToggledTree(target.id))}} style={{margin:"4rem"}}>
      {
          getRenderedTree(data)
      } 
      </div>

  );
}

export default App;
