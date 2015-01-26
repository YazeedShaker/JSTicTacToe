function nextStep(arrayTotal, choice) {

    this.arrayTotal = arrayTotal;
    var arrayX = [];
    var arrayO = [];

    firstRow = [arrayTotal[0], arrayTotal[1], arrayTotal[2]];
    secondRow = [arrayTotal[3], arrayTotal[4], arrayTotal[5]];
    thirdRow = [arrayTotal[6], arrayTotal[7], arrayTotal[8]];

    //for there is already a winning case in the given input array 
    if (((firstRow[0] === firstRow[1]) && (firstRow[1] === firstRow[2])) || ((firstRow[0] === secondRow[0]) && (secondRow[0] === thirdRow[0])) || ((firstRow[0] === secondRow[1]) && (secondRow[1] === thirdRow[2]))) {
        firstRow[0] = 2;
    } if (((firstRow[2] === secondRow[2]) && (secondRow[2] === thirdRow[2])) || ((firstRow[2] === secondRow[1]) && (secondRow[1] === thirdRow[0]))) {
        firstRow[2] = 2;
    } if ((firstRow[1] === secondRow[1]) && (secondRow[1] === thirdRow[1])) {
        firstRow[1] = 2;
    }


    switch (choice) {
        //For the case if the choice is X
        case "x":

            //for the probability of a winning case
            if (((firstRow[1] === firstRow[2]) && (firstRow[2] === 1) || (secondRow[1] === thirdRow[2]) && (thirdRow[2] === 1)) || ((secondRow[0] === thirdRow[0]) && (thirdRow[0] === 1))) {
                arrayO.push(1);
            } if (((secondRow[1] === thirdRow[0]) && (thirdRow[0] === 1)) || ((secondRow[2] === thirdRow[2]) && (thirdRow[2] === 1))) {
                arrayO.push(3);
            } if ((firstRow[1] === secondRow[1]) && (secondRow[1] === 1)) {
                arrayO.push(8);
            } if ((secondRow[1] === thirdRow[1]) && (thirdRow[1] === 1)) {
                arrayO.push(2);
            } if ((firstRow[1] === thirdRow[1]) && (thirdRow[1] === 1)) {
                arrayO.push(5);
            } if ((secondRow[0] === secondRow[1]) && (secondRow[1] === 1)) {
                arrayO.push(6);
            } if ((secondRow[0] === secondRow[2]) && (secondRow[2] === 1)) {
                arrayO.push(5);
            } if ((secondRow[1] === secondRow[2]) && (secondRow[2] === 1)) {
                arrayO.push(4);
            } if ((thirdRow[0] === thirdRow[1]) && (thirdRow[1] === 1)) {
                arrayO.push(9);
            } if ((thirdRow[0] === thirdRow[2]) && (thirdRow[2] === 1)) {
                arrayO.push(8);
            } if ((thirdRow[1] === thirdRow[2]) && (thirdRow[2] === 1)) {
                arrayO.push(7);
            } if ((firstRow[0] === secondRow[0]) && (secondRow[0] === 1)) {
                arrayO.push(7);
            } if ((firstRow[0] === secondRow[1]) && (secondRow[1] === 1)) {
                arrayO.push(9);
            }
            break;

            //For the case if the choice is O
        case "o":
            //for the probability of a winning case
            if (((firstRow[1] === firstRow[2]) && (firstRow[2] === 0) || (secondRow[1] === thirdRow[2]) && (thirdRow[2] === 0)) || ((secondRow[0] === thirdRow[0]) && (thirdRow[0] === 0))) {
                arrayX.push(1);
            } if (((secondRow[1] === thirdRow[0]) && (thirdRow[0] === 0)) || ((secondRow[2] === thirdRow[2]) && (thirdRow[2] === 0))) {
                arrayX.push(3);
            } if ((firstRow[1] === secondRow[1]) && (secondRow[1] === 0)) {
                arrayX.push(8);
            } if ((secondRow[1] === thirdRow[1]) && (thirdRow[1] === 0)) {
                arrayX.push(2);
            } if ((firstRow[1] === thirdRow[1]) && (thirdRow[1] === 0)) {
                arrayX.push(5);
            } if ((secondRow[0] === secondRow[1]) && (secondRow[1] === 0)) {
                arrayX.push(6);
            } if ((secondRow[0] === secondRow[2]) && (secondRow[2] === 0)) {
                arrayX.push(5);
            } if ((secondRow[1] === secondRow[2]) && (secondRow[2] === 0)) {
                arrayX.push(4);
            } if ((thirdRow[0] === thirdRow[1]) && (thirdRow[1] === 0)) {
                arrayX.push(9);
            } if ((thirdRow[0] === thirdRow[2]) && (thirdRow[2] === 0)) {
                arrayX.push(8);
            } if ((thirdRow[1] === thirdRow[2]) && (thirdRow[2] === 0)) {
                arrayX.push(7);
            } if ((firstRow[0] === secondRow[0]) && (secondRow[0] === 0)) {
                arrayX.push(7);
            } if ((firstRow[0] === secondRow[1]) && (secondRow[1] === 0)) {
                arrayX.push(9);
            }
            break;

        default:
            console.log("Please enter a valid choice of X or O");
    }


    if (choice === "o") {
        console.log(arrayX);
    } else {
        console.log(arrayO);
    }

}


var array = [1, 1, 0, 2, 0, 2, 0, 2, 2];
nextStep.arrayTotal = array;
nextStep(array, "o");
