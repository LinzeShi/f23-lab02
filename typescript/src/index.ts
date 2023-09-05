import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";

const shape: Shape = newRectangle(2, 9);  // Shape type here
const renderer = newRenderer(shape);
renderer.draw();

/*
import { newRenderer } from "./renderer.js"
import { Rectangle, newRectangle } from "./shapes/rectangle.js";

const rectangle: Rectangle = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();
*/