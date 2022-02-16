// Write a program where it will console these 3 parameters for odd and even numbers.
// count
// sum
// average

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0;
var odd_sum=0;
var even_sum=0;
while (i<elements.length){
    if (i%2==0){
        even_sum=even_sum+elements[i]
    }
    else{
        odd_sum=odd_sum+elements[i]
    }
    i=i+1
}
console.log(even_sum)
console.log(odd_sum)







