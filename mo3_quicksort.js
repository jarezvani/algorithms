
function quickSort(items, left, right) {
    var index;

    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index -1 ) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}


function partition(items, left, right) {
    var pivot = items[medianOfThree(arr,left,right)];
   	//var pivot = items[left];
   	//var pivot = items[right-1]
    var  i       = left,
        j       = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

function runSort(array){
	var start = new Date().getTime(); //<-- start time
	console.log(quickSort(arr,0,arr.length-1));
	var end = new Date().getTime(); //<-- end time
	var time = end - start; //<-execution time in milliseconds
	console.log(time);
}

function medianOfThree(arr,l,r){
	  var a = l,
	      c = r,
	      b = Math.floor(c/2);
	  
	  if(arr.length === 3){
	    b = 1;
	  } else if(arr.length === 2){
	    if(arr[0] > arr[1]){
	      return arr[1];
	    }else{
	      return arr[0];
	    }
	  } else if(arr.length < 2){
	    return arr[0];
	  }
	  
	  if((arr[c]<arr[b] && arr[b]<arr[a]) || (arr[a]<arr[b] && arr[b]<arr[c]) || (arr[a]===arr[c] && arr[b]<arr[c]) || (arr[b]===arr[a] && arr[b]<arr[c]) || arr[b]===arr[c] && arr[b]<arr[a]){
	    return b;
	  } else if((arr[c]<arr[b] && arr[c]>arr[a]) || (arr[c]>arr[b] && arr[c]<arr[a]) || (arr[a]===arr[b] && arr[c]<arr[a])){
	    return c;
	  } else if((arr[a]<arr[b] && arr[a]>arr[c]) || (arr[a]>arr[b] && arr[a]<arr[c]) || (arr[b]===arr[c] && arr[a]<arr[c]) || (arr[a]===arr[c] && arr[a]<arr[b])){
	    return a;
	  } else if (arr[a]===arr[b] && arr[b]===arr[c]){
	    return b;
	  }
}
