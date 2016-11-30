
function findMissing(arr1, arr2){

    var arr1Size = arr1.length;
    var arr2Size = arr2.length;

    // to ensure that the difference in length is one.

    if (Math.abs(arr1Size - arr2Size) !== 1){
        return 0;
    }

    //loop through arr2

    for (var i = 0; i< arr2Size; i++){

        //look for the same thing in new array

        if (arr1.indexOf(arr2[i]) ==-1){
            return arr2[i];
        }

    }
}
module.exports = findMissing;