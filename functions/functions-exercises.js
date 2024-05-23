function makeLine(size) {
    let shape = "";
    for (index = 0; index < size; index++) {
        shape += "#";
    }
    return shape;
}

// console.log(makeLine(5));

function makeSquare(size) {
    let square = "";
    for (let index = 0; index < size; index++) {
        square += '\n' + makeLine(size);
    }
    return square;
}

// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = "";
    for (let index = 0; index < height; index++) {
        rectangle += '\n' + (makeLine(width));
    }
    return rectangle;
}

//   console.log(makeRectangle(5,3));

function makeDownwardStairs(height) {
    let stairs = "";
    for (let index = 0; index < height; index++) {
        stairs += '\n' + (makeLine(index + 1));
    }
    return stairs;
}

// console.log(makeDownwardStairs(5));


function makeSpaceLine(numSpaces, numChars) {
    let space = " ";
    let char = "#";
    let spaceCharArray = [];
    let spaceCharLine = "";
    for (let index = 0; index < numSpaces; index++) {
        spaceCharArray.push(space);
    }
    for (let indexj = 0; indexj < numChars; indexj++) {
        spaceCharArray.push(char);
    }
    for (let index = 0; index < numSpaces; index++) {
        spaceCharArray.push(space);
        spaceCharLine = spaceCharArray.join("");
    }
    return (spaceCharLine);
}

// console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height) {
    let triangle = "";
    for (let index = 0; index < height; index++) {
        triangle += '\n' + makeSpaceLine(height - index - 1, 2 * index + 1);
    }
    return (triangle);
}

// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = "";
    let triangle = "";
    let reverseTriangle = [];
    for (let index = 0; index < height; index++) {
        triangle += '\n' + makeSpaceLine(height - index - 1, 2 * index + 1);
        reverseTriangle = triangle.split('').reverse().join('');
    }
    diamond += triangle + reverseTriangle;

    return (diamond);
}

console.log(makeDiamond(5));

