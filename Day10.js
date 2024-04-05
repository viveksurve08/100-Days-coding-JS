// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

//1st Approach- using every method
// const arraysAreEqual=(arr1,arr2)=>{
//     if(arr1.length!= arr2.length){
//         return false;
//     }
//      return arr1.every((curVal,index)=>curVal===arr2[index])
// }

//2nd Approach - using for loop
const arraysAreEqual=(arr1,arr2)=>{
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
    if(arr1[i]!==arr2[i]){
        return false;
    }
}
return true;
}



//Example usage: 
console.log(arraysAreEqual([1,2,3],[1,2,3]))//Outpur: true
console.log(arraysAreEqual([1,2,3],[1,2,4]))//Outpur: false
console.log(arraysAreEqual([],[]))//Outpur: true


