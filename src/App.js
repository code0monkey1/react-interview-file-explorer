
import './App.css';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import useTree from './hooks/useTree';

function App() {

    const{tree,addNewNode} =  useTree(treeData)
  
  return (
       <div >
         {tree && <Folder addNewNode={addNewNode}  data={tree} />}
       </div>
  );
}

export default App;
