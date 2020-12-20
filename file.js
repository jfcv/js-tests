//eliminate duplicates & order array

let arr = [8,1,2,1,2,3,4,5,7,8];

console.log(arr);
console.log('-------------');

for (let index = 0; index < arr.length; index++) {
    for (let j = index+1; j < arr.length; j++) {
        if(arr[index] == arr[j]) { 
            arr.splice(j, 1);
        }
    }    
}

console.log(arr);
console.log('-------------');

let arr1 = arr;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - i - 1; j++) {
        if(arr1[j] > arr1[j+1]) {
            console.log("swapping " + arr1[j] + " & " + arr1[j+1])
            auxPosition = arr1[j]; /* saving the j (current) position on the auxPosition variable */
            arr1[j] = arr1[j+1]; /* updating the jth position with a lower value */
            arr1[j+1] = auxPosition; /* updating the jth + 1 with a greater value */
        }     
    }
}

console.log('-------------------');
console.log(arr1);