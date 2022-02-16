// find that number not present in list2
var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
var k=[]
for(var i=0;i<list1.length;i++){
    if(!list2.includes(list1[i])){
        k.push(list1[i])
// 
    }
}
console.log(k)