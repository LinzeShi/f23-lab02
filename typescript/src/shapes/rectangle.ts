interface Rectangle extends Shape {
    // 私有的，不应从外部访问
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