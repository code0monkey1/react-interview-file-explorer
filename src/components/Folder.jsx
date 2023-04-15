import { useState } from 'react';
import image from './folder.png';
const Folder = ({data}) => {
  
  const[add,setAdd]=useState(false)

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
 <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <img id={data.id} src={image} alt="folder" width={60} height={60} />
        <div style={{ paddingTop: '1rem' }} id={data.id}>{data.name}</div>
      </div>
     
      <div style={styles.buttonContainer}>
        <button>Add File</button>
        <button style={{ marginLeft: '0.5rem' }}>Add Folder</button>
      </div>
    </div>
    <br/>
     <form style={styles.form}>
             <div>Whatever</div>
      </form>
    </>
  )
}

export default Folder