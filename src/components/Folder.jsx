import { useState } from 'react';
import data from '../data/folderData';
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

const Folder = ({data}) => {
   
  return<>
  {data.name}
  {data.items.map((item) => <div key={data.id} style={{paddingLeft:"2rem"}}><Folder data={data} /></div>)}
  </>
  
}

export default Folder