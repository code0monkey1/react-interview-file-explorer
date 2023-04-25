import { getDeepCopy } from '../../utils/copy';


let originalTree ={
          id:"1",
          name: "root",
          isFolder: true,
          items: [{

          id:"2",
          name: "root",
          isFolder: true,
          items:[]
          }
          ,{
          id:"3",
          name: "root",
          isFolder: true,
           items:[]
          }
        ]
        }

const getOriginalTree=()=>originalTree


const getDeepCopyOf=(tree)=>getDeepCopy(tree)

export default {
  getOriginalTree,
  getDeepCopyOf
};
