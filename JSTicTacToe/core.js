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




