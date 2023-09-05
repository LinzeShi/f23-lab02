interface Circle extends Shape {
    // 私有的，不应从外部访问
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