var staticArray = [3, 5, 0, 3, 5, 0, 0, 0, 0];
function nextStep(array) {
    var result = [];
    var sum = 0;
    //For Horizontal Cases
    for (var i = 0; i < 9; i += 3) {
        for (var k = i; k < 3 + i; k++) {
            sum += array[k];
            if (sum === 6) {
                result.push(array.indexOf(0) + 1);
            } else if (array[k] > 3) {
                sum = 0;
            }
        }
        array[k - 1] = 1;
        array[k - 2] = 1;
        array[k - 3] = 1;
        sum = 0;
    }
    array = staticArray;
    sum = 0;
    //some Special cases
    if (array[2] === 3 && array[5] === 3) {
        result.push(9);
    }
    else if (array[2] === array[8] && array[8] === 3) {
        result.push(6);
    }
    else if (array[5] === array[8] && array[8] === 3) {
        result.push(3);
    }
    array = staticArray;
    sum = 0;
    //Diagonal cases
    if (array[0] === array[8] && array[8] === 3 || array[2] === array[6] && array[6] === 3) {
        result.push(5);
    }
    if (array[0] === array[4] && array[4] === 3) {
        result.push(9);
    }
    if (array[4] === array[8] && array[8] === 3) {
        result.push(1);
    }
    if (array[2] === array[4] && array[4] === 3) {
        result.push(7);
    }
    if (array[4] === array[6] && array[6] === 3) {
        result.push(3);
    }
    array = staticArray;
    sum = 0;
    //For Vertical Cases
    for (var i = 0; i < 3; i++) {
        for (var k = i; k < 9; k += 3) {
            sum += array[k];
            if (array[0] === 0 && array[3] === 0) {
                array[0] = 1;
            }
            if (sum === 6 || sum === 3) {
                array[k + 1] = 1;
                array[k + 2] = 1;
            }
            if (sum === 6) {
                result.push(array.indexOf(0) + 1);
            } else if (array[k] > 3) {
                sum = 0;
            }
        }
    }
    console.log(result[0]);
}
nextStep.array = array
nextStep(array);