const arrNum = [1,2,3,4,5,6,7,8,9,10]

let max = Math.max.apply(null, arrNum)
let min = Math.min.apply(null, arrNum)
console.log(max)
console.log(min)

let a = function() {
        let max2 = arrNum[0]
        let min2 = arrNum[0]
        for (let i = 0; i < arrNum.length; i++){
                if (arrNum[i] > max2) max2 = arrNum[i];
                if (arrNum[i] < min2) min2 = arrNum[i];
        }
        console.log(max2)       
        console.log(min2)
}
a()