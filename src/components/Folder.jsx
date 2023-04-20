import { useEffect } from 'react';
import image from './folder.png';

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
  
  return (
<>
    <div  
      style={styles.container} 
     >
      
      <div style={styles.buttonContainer}>
        <img id={data.id} src={image} alt="folder" width={60} height={60} />
        <div style={{ paddingTop: '1rem' }} >{data.name}</div>
      </div>
     
      <div style={styles.buttonContainer}>
        <button data-id={data.id} name='file'>Add File</button>
        <button data-id={data.id} name='folder' style={{ marginLeft: '0.5rem' }}>Add Folder</button>
      </div>
    </div>
    <br/>
     <div style={{marginLeft:"5rem",display:(inputRef.current?.value.name?'':"none")}}>
            <input ref={inputRef} type='text' placeholder={`name of the ${inputRef.current?.value.name}`}></input>
      </div>
  </>
  )
}

export default Folder