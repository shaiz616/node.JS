var a=require("./arr");

let arr = [];
for(i=0;i<5;i++){
    arr[i] = Math.floor(Math.random()*200)
}

a.printArr(arr);
a.sum(arr);
// a.avg(arr);
// a.max(arr);
// a.Min(arr);
a.even(arr);
a.odd(arr);