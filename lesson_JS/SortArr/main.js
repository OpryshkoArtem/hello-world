function sortAsc (array) {
	if(!Array.isArray(array)) {
	  return null;
  }
  let firstSort = [];
  for (let k = 0; k < array.length; k+=1) {
	  for (let i = 0; i < array.length; i+=1){
		  if (array[i] >= array[i+1]) {
			  let num1 = array[i];
			  let num2 = array[i+1];
			  array[i] = num2;
			  array[i+1] = num1;
		  }
		  firstSort.push(array[i]);
	  }
  }
  let finishSort = [];
  for(let j = 0; j < array.length; j+=1) {
	  const helperNum = firstSort.pop();
	  finishSort.unshift(helperNum);
  }
  return finishSort;
}

function sortDesc (array) {
	if(!Array.isArray(array)) {
	  return null;
  }
  let firstSort = [];
  for (let k = 0; k < array.length; k+=1) {
	  for (let i = 0; i < array.length; i+=1){
		  if (array[i] >= array[i+1]) {
			  let num1 = array[i];
			  let num2 = array[i+1];
			  array[i] = num2;
			  array[i+1] = num1;
		  }
		  firstSort.push(array[i]);
	  }
  }
  let finishSort = [];
  for(let j = 0; j < array.length; j+=1) {
	  const helperNum = firstSort.pop();
	  finishSort.push(helperNum);
  }
  return finishSort;
}