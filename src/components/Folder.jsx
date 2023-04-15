import image from './folder.png';

const Folder = ({data,toggleOpen}) => {
  
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
  


  return (<>
 <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <img id={data.id} onClick={() => toggleOpen(data.id)} src={image} alt="folder" width={60} height={60} />
        <div style={{ paddingTop: '1rem' }} id={data.id}>{data.name}</div>
      </div>
      <div style={styles.buttonContainer}>
        <button>Add File</button>
        <button style={{ marginLeft: '0.5rem' }}>Add Folder</button>
      </div>
    </div>
    </>
  )
}

export default Folder