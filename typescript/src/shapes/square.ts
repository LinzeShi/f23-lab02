interface Square extends Shape {
    // ˽�еģ���Ӧ���ⲿ����
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