interface Circle extends Shape {
    // ˽�еģ���Ӧ���ⲿ����
    computeArea: () => number;
}

function newCircle(radius: number): Circle {
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius;
        }
    }
}

export { newCircle, Circle }

/*
function circle(radius: number): Shape {
    return {
        radius,
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
*/