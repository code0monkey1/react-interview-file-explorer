import './App.css';
import File from './components/File.jsx';
import Folder from './components/Folder.jsx';

function App() {
  
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
