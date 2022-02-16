// find the duplicate number
var c = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var k=[]
for (var i of c){
    if (!k.includes(i)){
        k.push(i)
    }
}
var m=[]
for(var j of k){
    var count=0
    for (var l of c){
        if (j===l){
            count++
        }
    }
    if (count>1){
        m.push(j)
    }
}
console.log(m)