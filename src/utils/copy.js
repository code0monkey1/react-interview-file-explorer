const getDeepCopy = (tree)=>{
 console.time('getDeepCopy');
  const head=JSON.parse(JSON.stringify(tree));
 console.time('getDeepCopy');
  return head

}

export {
  getDeepCopy
};
