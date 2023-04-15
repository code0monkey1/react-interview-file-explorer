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

  return (<>
    <div style={styles.container} onClick={({target:{name}}) => {setFileType(name)}}>
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
     <form style={{marginLeft:"3.2rem",display:(fileType?'':"none")}}>
            <input type='text' placeholder={`name of the ${fileType}`}></input>
      </form>
    </>
  )
}

export default Folder