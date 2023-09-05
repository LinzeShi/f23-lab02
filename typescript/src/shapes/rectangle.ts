interface Rectangle extends Shape {
    // ˽�еģ���Ӧ���ⲿ����
    computeArea: () => number;
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        computeArea: function (): number {
            return width * height;
        },
    }
}

export { newRectangle, Rectangle }
/*
interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        width,
        height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle, newRectangle }
*/