function nextStep(first, choice) {
    var arrayX = [];
    var arrayO = [];
    var second = [];
    var check = [3, 1, 0, 6, 4, 0, 9, 7];
    var check2 = [7, 1, 0, 0, 8, 2, 0, 9, 3, 0];
    var check3 = [4, 0, 5, 0, 6];
    var check4 = [2, 5, 8];
    var check5 = [9, 1];
    var check6 = [7, 3];
    var j = 0;
    //for The second array
    for (var i = 0; i < first.length - 1; i++) {
        second[i] = first[i + 1];
    }

    if (choice === "o") {

        //for the horizontal cells
        for (var i = 0; i < second.length; i++) {
            if (first[i] === 2 || first[i] === 5) {
                null;
            }
            if ((first[i] === second[i]) && (second[i] === 0)) {
                if (first[check[i] - 1] === 2)
                    arrayO.push(check[i]);
            }
        }
        //for the vertical cells 
        for (var i = 0; i < 3; i++) {
            for (var k = i; k <= first.length; k += 3) {
                if ((first[k] === second[k + 2]) && (second[k + 2] === 0)) {
                    if (first[check2[j] - 1] === 2)
                        arrayO.push(check2[j]);
                }
                j++;
            }
        }
        //return j=0
        j = 0;
        //for vertical first & last
        for (var i = 0; i < 3; i++) {
            for (var k = i; k <= first.length; k += 6) {
                if ((first[k] === second[k + 5]) && (second[k + 5] === 0)) {
                    if (first[check3[j] - 1] === 2)
                        arrayO.push(check3[j]);
                }
                j++;
            }
        }
        //return j=0
        j = 0;
        //for horizontal first & last
        for (var i = 0; i <= first.length; i += 3) {
            if ((first[i] === second[i + 1]) && (second[i + 1] === 0)) {
                if (first[check4[j] - 1] === 2)
                    arrayO.push(check4[j]);
            }
            j++;
        }
        //return j=0
        j = 0;
        //for diagonal first[0]
        for (var i = 0; i < 5; i += 4) {
            if ((first[i] === second[i + 3]) && (second[i + 3] === 0)) {
                if (first[check5[j] - 1] === 2)
                    arrayO.push(check5[j]);
            }
            j++;
        }
        //return j=0
        j = 0;
        //for diagonal first[2]
        for (var i = 2; i < 5; i += 2) {
            if ((first[i] === second[i + 1]) && (second[i + 1] === 0)) {
                if (first[check6[j] - 1] === 2)
                    arrayO.push(check6[j]);
            }
            j++;
        }
        //for the diagonal first & last two cases
        if (((first[0] === second[7]) && (second[7] === 0) && (first[4] === 2)) || ((first[2] === second[5]) && (second[5] === 0) && (first[4] === 2))) {
            arrayO.push(5);
        }
        // for the X player   
    } else {
        //for the horizontal cells
        for (var i = 0; i < second.length; i++) {
            if (first[i] === 2 || first[i] === 5) {
                null;
            }
            if ((first[i] === second[i]) && (second[i] === 1)) {
                if (first[check[i] - 1] === 2)
                    arrayX.push(check[i]);
            }
        }
        //for the vertical cells 
        for (var i = 0; i < 3; i++) {
            for (var k = i; k <= first.length; k += 3) {
                if ((first[k] === second[k + 2]) && (second[k + 2] === 1)) {
                    if (first[check2[j] - 1] === 2)
                        arrayX.push(check2[j]);
                }
                j++;
            }
        }
        //return j=0
        j = 0;
        //for vertical first & last
        for (var i = 0; i < 3; i++) {
            for (var k = i; k <= first.length; k += 6) {
                if ((first[k] === second[k + 5]) && (second[k + 5] === 1)) {
                    if (first[check3[j] - 1] === 2)
                        arrayX.push(check3[j]);
                }
                j++;
            }
        }
        //return j=0
        j = 0;
        //for horizontal first & last
        for (var i = 0; i <= first.length; i += 3) {
            if ((first[i] === second[i + 1]) && (second[i + 1] === 0)) {
                if (first[check4[j] - 1] === 2)
                    arrayX.push(check4[j]);
            }
            j++;
        }
        //return j=0
        j = 0;
        //for diagonal first[0]
        for (var i = 0; i < 5; i += 4) {
            if ((first[i] === second[i + 3]) && (second[i + 3] === 1)) {
                if (first[check5[j] - 1] === 2)
                    arrayX.push(check5[j]);
            }
            j++;
        }
        //return j=0
        j = 0;
        //for diagonal first[2]
        for (var i = 2; i < 5; i += 2) {
            if ((first[i] === second[i + 1]) && (second[i + 1] === 1)) {
                if (first[check6[j] - 1] === 2)
                    arrayX.push(check6[j]);
            }
            j++;
        }
        //for the diagonal first & last two cases
        if (((first[0] === second[7]) && (second[7] === 1) && (first[4] === 2)) || ((first[2] === second[5]) && (second[5] === 1) && (first[4] === 2))) {
            arrayX.push(5);
        }
    }
    if (choice === "o") {
        console.log(arrayO[0]);
    } else {
        console.log(arrayX[0]);
    }
}
var array = [2, 2, 1, 2, 2, 2, 0, 2, 2];
nextStep.first = array;
nextStep(array, "x");
nextStep(array, "o");