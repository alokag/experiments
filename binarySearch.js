var sortedArray = [2, 3, 5, 7, 8, 9, 12, 15, 20 ,37];

//Need to find index of x
var x = 20;

var binarySearch = function (arr, x) {
    var startIndex = 0, endIndex = (arr.length - 1);
    
    while (startIndex <= endIndex) {
        var middle = Math.floor((startIndex + endIndex) / 2);
        console.log("middle>>"+middle);
        if (arr[middle] === x) {
            return middle;
        };
        if (arr[middle] < x) {
             startIndex = middle + 1;           
        }
        if (arr[middle] > x) {
            endIndex = middle - 1;
        }
        console.log ("startIndex>"+ startIndex + " endIndex>> "+ endIndex);
    }
    return -1;

}

var result = binarySearch(sortedArray, x);
console.log("result>>>"+ result);