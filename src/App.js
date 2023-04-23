
import './App.css';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import useTree from './hooks/useTree';

function App() {

    const{tree:data,addNewNode} =  useTree(treeData)
    
  return (
       <div >
          <Folder addNode={addNewNode}  data={data} />
       </div>
  );
}

export default App;
