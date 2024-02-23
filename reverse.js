const array=[9, true , 8 ,'sam',7 , 1 , 6 , 15 , false , 26 , null]
for(let i=0 ; i<array.length/2 ; i++){
   [array[i] , array[array.length-1-i]]=[array[array.length-1-i] , array[i]]
}
console.log(array);