import { useEffect, useRef, useState } from 'react';
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

const Folder = ({data}) => {
  
  const[fileType,setFileType]=useState(null)
 const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        console.log('Clicked outside');
        setFileType(null)
        inputRef.current.value=''
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  return (
<>
    <div  
     style={styles.container} 
     onClick={({target:{name}}) => {setFileType(name)}}>
      
      <div style={styles.buttonContainer}>
        <img id={data.id} src={image} alt="folder" width={60} height={60} />
        <div style={{ paddingTop: '1rem' }} >{data.name}</div>
      </div>
     
      <div style={styles.buttonContainer}>
        <button data-id={data.id} name='add-file'>Add File</button>
        <button data-id={data.id} name='add-folder' style={{ marginLeft: '0.5rem' }}>Add Folder</button>
      </div>
    </div>
    <br/>
     <form style={{marginLeft:"3.2rem",display:(fileType?'':"none")}}>
            <input ref={inputRef} type='text' placeholder={`name of the ${fileType}`}></input>
      </form>
  </>
  )
}

export default Folder