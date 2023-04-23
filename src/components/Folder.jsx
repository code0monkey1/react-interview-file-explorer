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
   
  return<>
  {data.name}
  {data.items.map((item) => <div>{item.name}</div>)}
  </>
  
}

export default Folder