const getDeepCopy = (tree)=>{
 
  const head=JSON.parse(JSON.stringify(tree));
  return head

}

export {
  getDeepCopy
};
