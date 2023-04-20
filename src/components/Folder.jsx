import { useEffect, useState } from 'react';
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


    useEffect(() => {
      const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
           setType(null)
        }
      };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [type,inputRef]);

  return (
<>
    <div  
      style={styles.container} 
     >
      
      <div style={styles.buttonContainer}>
        <img id={data.id} src={folder} alt="folder" width={60} height={60} />
        <div style={{ paddingTop: '1rem' }} >{data.name}</div>
      </div>
     
      <div style={styles.buttonContainer}>
        <button onClick={()=>{setType('file')}}  name='file'>Add File</button>
        <button onClick={()=>{setType('folder')}}  name='folder' style={{ marginLeft: '0.5rem' }}>Add Folder</button>
      </div>
    </div>
    <br/>
     <div style={{marginLeft:"5rem",display:(type?'':"none")}}>
             <img id={data.id} src={type==="file"?file:folder} alt="folder" width={60} height={60} />
            <input ref={inputRef} data-id={data.id} data-name={type} type='text' placeholder={`name of the ${type}`}></input>
      </div>
  </>
  )
}

export default Folder