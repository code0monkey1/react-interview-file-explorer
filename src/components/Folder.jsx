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
   const [open,setOpen]=useState(false)
  return<>
  {data.name}

  <div  style={{paddingLeft:"2rem"}}>
   {data.items.map((item) =><Folder key={item.id} data={item} />) }
  </div>
  
  </>
  
}

export default Folder