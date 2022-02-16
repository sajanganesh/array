// find the palindrom number 
var Name=['m','a','l','a','y','a','l','a','m'];
var k=[]
for(var i=Name.length-1;i>=0;i--){
    k.push(Name[i])
}
var count=0
for(var j=0;j<Name.length;j++){
    if (k[j]===Name[j]){
        count++
    }
}
if(count===Name.length){
    console.log("palindrom")
}
else{
    console.log("not palindrom")
}
 