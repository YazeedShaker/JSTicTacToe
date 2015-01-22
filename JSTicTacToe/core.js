

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

function NextStep(x, y, z) {
    array1 = [x, y, z];
    array2 = [x, y, z];
    array3 = [x, y, z];
    var multiArray = [[array1], [array2], [array3]];

    //switching the array1[last] with array3[last]
    var temp = array1[array1.length - 1];
    array1[array1.length - 1] = array3[array3.length - 1];
    array3[array3.length - 1] = temp;

    //switching the array1[last] with array2[Middle]
    var temp1 = array2[1];
    array2[1] = array1[array1.length - 1];
    array1[array1.length - 1] = temp1;

    //switching the array2[last] with array3[Middle]
    var temp2 = array3[1];
    array3[1] = array2[array2.length - 1];
    array2[array2.length - 1] = temp2;

    for (var i = 0; i < multiArray.length; i++) {
        var multiArray = [[array1], [array2], [array3]];
        console.log(multiArray[i]);
    }
}

NextStep(1, 2, 3);




