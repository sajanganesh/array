// find the addition of 30 num
var n = [10, 11, 12, 13, 14, 17, 18, 19]
var k=30
var m=[]
for (var i of n){
    for (var j of n){
        if (i+j===k){
            m.push([i,j])
        }
    }
}
console.log(m)
