import { useState } from 'react';
import file from './file.png';
import folder from './folder.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem',
  },
};

const Folder = ({data,inputRef}) => {
   
  const[type,setType] = useState(null)
  const[toggle,setToggle] = useState(false)


  return (
  <>
    <div  
      style={styles.container} 
     >
      
      <div style={styles.buttonContainer}>
         <span>🗂️</span>
        <div>{data.name}</div>
      </div>
     
      <div style={styles.buttonContainer}>
        <button onClick={()=>{setType('file');setToggle(!toggle)}}  name='file'>Add File</button>
        <button onClick={()=>{setType('folder');setToggle(!toggle)}} name='folder'  style={{ marginLeft: '0.5rem' }}>Add Folder</button>
      </div>
    </div>
    <br/>
     <div style={{marginLeft:"5rem",display:(toggle?'':"none")}}>
             {type==='file' ?<span>📝</span> :<span>🗂️ </span>}
             <input ref={inputRef} data-id={data.id} data-type={type} type='text' placeholder={`name of the ${type}`}></input>
      </div>
  </>
  )
}

export default Folder