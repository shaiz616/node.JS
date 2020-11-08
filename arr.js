function printArr(arr){
    
    for(i=0;i<arr.length;i++){
        console.log(arr[i], ", ");
    }
}
/*  sum of all elements in array    */ 
function sumArr(arr){
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}

function avarage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    console.log(sum/arr.length);
}

function maxNum(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>max)
            max = arr[i];
    }
    console.log(max);
}

function minNum(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(min>arr[i])
            min = arr[i];
    }
    console.log(min)
}

function evenSum(arr){
    let sum=0;
    for (i in arr){
        if(arr[i]%2==0)
           sum += arr[i];
    }
    console.log(sum);
}

function oddSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2!=0)
            sum+=arr[i];
    }
    console.log(sum);
}

module.exports={
    printArr:printArr,
    sum:sumArr,
    max:maxNum,
    avg:avarage,
    Min:minNum,
    even:evenSum,
    odd:oddSum
};

