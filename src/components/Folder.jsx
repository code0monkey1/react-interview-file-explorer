import { useState } from 'react';
import image from './folder.png';
const Folder = ({data}) => {
  
  const[fileType,setFileType]=useState(null)

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
  hidden:{
    display:'none'
  },
  visible: {

  }
};
  
 const setFileOrFolder=({target:{name}}) => {
      console.log('clicked with name',name)
        setFileType(name)
 }

  return (<>
 <div style={styles.container} onClick={setFileOrFolder}>
      <div style={styles.buttonContainer}>
        <img id={data.id} src={image} alt="folder" width={60} height={60} />
        <div style={{ paddingTop: '1rem' }} id={data.id}>{data.name}</div>
      </div>
     
      <div style={styles.buttonContainer}>
        <button  name='file'
        >Add File</button>
        <button name='folder' style={{ marginLeft: '0.5rem' }}>Add Folder</button>
      </div>
    </div>
    <br/>
     <form style={{marginLeft:"1rem"}}>
             <div>Whatever</div>
      </form>
    </>
  )
}

export default Folder