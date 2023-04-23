
import './App.css';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import useTree from './hooks/useTree';

function App() {

    const{tree:data,addNewNode} =  useTree(treeData)
    
    console.log("The data is",JSON.stringify(data,null,2))

  return (
       <div >
         {data && <Folder addNode={addNewNode}  data={data} />}
       </div>
  );
}

export default App;
