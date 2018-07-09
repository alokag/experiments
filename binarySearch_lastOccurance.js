//Count occurrences of a number in a sorted array with duplicates using Binary Search
var sortedArray = [2, 3, 5,5,5,5, 7,7,7,7, 8, 9, 12, 15, 20 ,37];

//Need to find index of x
var x = 5;
/*
	To find first occurance call binarySearch( arr, x, true)
	To find last occurance call binarySearch( arr, x, false)
*/
var binarySearch = function (arr, x, searchFirst) {
    
    var startIndex =  0, 
    	endIndex = (arr.length - 1),
    	result = -1;

    while (startIndex <= endIndex) {
        var middle = Math.floor((startIndex + endIndex) / 2);
        //Other good way to calucate middle:
        //var middle = startIndex + ((endIndex- startIndex ) / 2);
        console.log("middle>>"+middle);
        if (arr[middle] === x) { 
        	result  = middle;
            if(searchFirst== true){
            	//assume this is the last occurance of x
            	endIndex = middle -1;
			}else{
				startIndex = middle +1;
			}
        }else if ( x < arr[middle] ) {
        	endIndex = middle - 1;
             
        }else{
        	startIndex = middle + 1;           
        }        
        console.log ("startIndex>"+ startIndex + " endIndex>> "+ endIndex);        
    }
    return result;

}
var lastOccurance = binarySearch(sortedArray, 5, false);
console.log("Last Occurance ==== "+ lastOccurance);