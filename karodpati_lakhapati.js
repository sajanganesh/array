// find how many karodpati,lakhapati and dilwale
var kitnapaisahai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var count=0
var count1=0
var count2=0
for(var i of kitnapaisahai){
    if (i<=10000000000 && i>=10000000){
        count++
    }
    if(i<=10000000 && i>100000){
        count1++
    }
    if(i<=100000){
        count2++
    }
}
console.log(count,"carorepati")
console.log(count1,"lakhapati")
console.log(count2,"dilwale")