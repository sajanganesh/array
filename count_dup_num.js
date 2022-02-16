// count the charecter simgle and duplicate number
var char= ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var u=[]
for(var i of char){
    if (!u.includes(i)){
        u.push(i)
    }
}
for(var k of u){
    var count=0
    for (var j of char){
        if(k===j){
            count++
        }
    }
    console.log(k,count)
}
