//【前端三分钟】面试官考你数组forEach方法？千万要注意这个缺陷

arr = [10,20,30,40,50]

// for(let item of arr){
//     if(item > 20){
//         break;
//     }
//     console.log(item)
// }


arr.forEach((item, index, data) => {
    if(item > 20){
        return;  // forEach不支持 break
    }
    data[index] = data[index] + 1;
})

console.log(arr)