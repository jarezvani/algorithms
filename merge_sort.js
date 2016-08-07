function mergeSort(a){    
  if(a.length<2)
    return a;
  
  var middle = Math.floor(a.length/2),
      left = a.slice(0, middle),
      right = a.slice(middle, a.length);

  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var newArr = [];
  
  while(left.length && right.length){
    if(left[0] <= right[0]){
      newArr.push(left.shift());
    }else{
      newArr.push(right.shift());
    }
  }
  
  while(left.length){
    newArr.push(left.shift());
  }
  
  while(right.length){
    newArr.push(right.shift());
  }
  
  return newArr;
}
