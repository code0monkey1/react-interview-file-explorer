
import { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import File from './components/File.jsx';
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
