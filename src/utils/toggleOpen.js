const getToggledTree=(event,data)=>{
        
          const head=JSON.parse(JSON.stringify(data));

          const id=event.target.id

          // console.log("The id obtained is",event.target.id);
            
         
          toggleItem(head,id)

          return head;
  }

function toggleItem(head,id){
             
            if(head.isFolder && head.id===id) {
                 head.open=!head.open;
              
                 closeItems(head.items)            
            }               
                          
             for (let item of head.items)
                  toggleItem(item,id)      
          }
   
const closeItems =(items)=>{  
  
      items.open=false;

      items.forEach(subItem=>{
               if(subItem.isFolder){
                  subItem.open=false;
                  closeItems(subItem.items)
              }
      })
      
 }



 export default getToggledTree
 