const fs = require('fs');
const inputData = fs.readFileSync("input.txt").toString().split("\n");

const total = parseInt(inputData[0]);
const count = parseInt(inputData[1])
const priceList = inputData.slice(2,2+count);
let sum;
for (let index = 0; index < count; index++) {
    let a = priceList[index].split(" ")
    sum += parseInt(a[0]) * parseInt(a[1]);
}
if (sum = total) {
    console.log("Yes")
}else{
    console.log("No")
}