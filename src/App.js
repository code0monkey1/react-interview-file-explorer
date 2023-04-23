
import './App.css';
import Folder from './components/Folder.jsx';
import treeData from './data/folderData';
import useTree from './hooks/useTree';

function App() {

    const{tree,addNewNode,removeNode,updateNode} =  useTree(treeData)
   console.log("new tree: " + JSON.stringify(tree,null,2))
  return (
       <div >
         {tree && <Folder 
         addNewNode={addNewNode}
         removeNode={removeNode} 
         data={tree}
         updateNode={updateNode} />}
       </div>
  );
}

export default App;
