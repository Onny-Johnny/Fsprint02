function total(addCount, addPrice, currentTotal) {
 
let res 
if(currentTotal == undefined){
  currentTotal = 0
}
res = currentTotal + addCount * addPrice
return res = Number(res.toFixed(2))

  }
  let sum = total(1, 0.1)
  sum = total(1, 0.2, sum)
  sum = total(1, 0.78, sum)
  
  console.log(sum)
  