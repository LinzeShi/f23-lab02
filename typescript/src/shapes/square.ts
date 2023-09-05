interface Square extends Shape {
    // 私有的，不应从外部访问
    computeArea: () => number;
}

function newSquare(sideLen: number): Square {
    return {
        computeArea: function (): number {
            return sideLen * sideLen;
        }
    }
}

export { newSquare, Square }

/*
function square(sideLen: number): Shape {
    return {
        sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }
*/