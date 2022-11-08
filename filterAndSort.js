/* Assuming the program is reading from the list called as listOfNumbers and output is observed in Command prompt*/


//input the List of Numbers
let listOfNumbers = [10, 10, 10, 10, 1, 2, 37, 99, 54, 60];

//Logging the Input List
console.log(listOfNumbers);

//Function Defination to remove duplicates from an array
function removeDuplicates(arrayTobeFiltered) {
    let filteredArray = arrayTobeFiltered.filter(function(item, pos) {
          return arrayTobeFiltered.indexOf(item) == pos;
      })
    return filteredArray
}

//Function Defination for ReverseSort
function reverseSort(arr) {
    arr.sort(function(a, b) {
        return b - a;
      });
}


//Remove Duplicates from the List
let uniqueArray = removeDuplicates(listOfNumbers);


//Sorting the uniqueArray in Reverse Order
reverseSort(uniqueArray);

//Logging the output
console.log(uniqueArray);

