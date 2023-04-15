import './App.css';
import Folder from './components/Folder.jsx';

function App() {
  
    const renderTree =(parent)=>{
    
      if (parent.isFolder){
        return <>
            <Folder/>
        </>
      }
      else{

      }
    }

    
  return (
  <div style={{margin:"4rem"}}>
      <Folder/>
      </div>

  );
}

export default App;
