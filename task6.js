let arr = [5,9,852,8526,3962,9596,95995,996,8,959,,94,,9,9,984174,548,8,84];
for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i]==arr[j]){
            console.log(`${i}й элемент массива равен ${j}му`)
        }
        else{
            console.log(`${i}й элемент массива не равен ${j}му`)
        };
    };
};