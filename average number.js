// find the average number
var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var odd=0;
var even=0;
for (var i of elements){
    if(i%2!==0){
        odd=odd+i
    }
    if(i%2===0){
        even=even+i
    }
}
console.log(odd+even/2)
