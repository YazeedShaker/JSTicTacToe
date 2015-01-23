/* This piece is for testing purposes*/
var inputArr = new Array(3);
for (var i = 0; i < 3; i++) {
    inputArr[i] = new Array(3);
    for (var j = 0; j < 3; j++) {
        inputArr[i][j] = new Array(3);
    }
}

inputArr[0][0][0] = 0;
inputArr[0][0][1] = 0;
inputArr[0][0][2] = 0;
inputArr[0][1][0] = 0;
inputArr[0][1][1] = 0;
inputArr[0][1][2] = 0;
inputArr[0][2][0] = 0;
inputArr[0][2][1] = 0;
inputArr[0][2][2] = 0;

/*
* This function will take in the current 9 values of the game and decide the next step
*
*/
function NextStep(x, y, z) {
    array1 = [x, y, z];
    array2 = [x, y, z];
    array3 = [x, y, z];
    var multiArray = [[array1], [array2], [array3]];

    //Exception for array1[1]===array1[2]
    if (array1[1] === array1[2]) {
        var temp = array1[0];
        var temp1 = array2[0];
        var temp2 = array3[0];
        array1[0] = array1[1];
        array2[0] = array2[1];
        array3[0] = array3[1];
        array1[1] = temp;
        array2[1] = temp1;
        array3[1] = temp2;
    } else {
        //switching the array1 column with array3 cloumn
        var temp = array1[1];
        var temp1 = array2[1];
        var temp2 = array3[1];
        array1[1] = array1[array1.length - 1];
        array2[1] = array2[array2.length - 1];
        array3[1] = array3[array3.length - 1];
        array1[array1.length - 1] = temp;
        array2[array1.length - 1] = temp1;
        array3[array1.length - 1] = temp2;

        //switching the array2[Middle] with array1[Last]
        var temp3 = array1[array1.length - 1];
        array1[array1.length - 1] = array3[1];
        array3[1] = temp3;
    }

    for (var i = 0; i < multiArray.length; i++) {
        var multiArray = [[array1], [array2], [array3]];
        console.log(multiArray[i]);
    }
}

NextStep(0, 0, 0);
console.log("");
NextStep(0, 0, 1);
console.log("")
NextStep(0, 0, 2);
console.log("")
NextStep(0, 1, 0);
console.log("")
NextStep(0, 1, 1);
console.log("")
NextStep(0, 1, 2);
console.log("")
NextStep(0, 2, 0);
console.log("")
NextStep(0, 2, 1);
console.log("")
NextStep(0, 2, 2);