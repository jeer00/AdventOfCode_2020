const fs = require('fs')

function loadFile() {
    var text = fs.readFileSync("input.txt").toString('utf-8');
   return numbers = text.split("\n").map(Number);
    
}
// Part 1
const sum = 2020
const sortArr = Array.from(loadFile())
const arr =[]

function part1() {
for (let i = 0; i < sortArr.length ; i++) {
    for(let j = i + 1 ; j < sortArr.length; j++) {

        if (sortArr[i] + sortArr[j] === sum) {
            arr.push(sortArr[i])
            arr.push(sortArr[j])
        }
        }
    }

console.log(arr)
const multiplied = arr.reduce((a,b) => a*b, 1)
return multiplied
}
part1()
// Part 2

function part2 (){

for (let i = 0; i < sortArr.length; i++) {
    for(let j = i + 1 ; j < sortArr.length; j++) {
        for(let k = j + 1; k < sortArr.length; k++) {
        if (sortArr[i] + sortArr[j] + sortArr[k] === sum) {
            arr.push(sortArr[i])
            arr.push(sortArr[j])
            arr.push(sortArr[k])
            // Not the perfect solution, due to the fact that theres 2 triplets, where the second includes 0, which gives zero when multiplied.
            console.log(sortArr[i] * sortArr[j] * sortArr[k])
        }
        }
    }
}


}

part2()