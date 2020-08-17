let arr = [2,3,4,5,6,7,8];

let index = arr.indexOf(6);
console.log(arr);
if(index>-1){
  arr.splice(index,1);
}
 
console.log(arr);

