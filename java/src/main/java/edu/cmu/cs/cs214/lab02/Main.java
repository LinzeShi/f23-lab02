package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Shape;

public class Main {
    public static void main(String[] args) {
        Shape shape = new Rectangle(9, 3);

        Renderer renderer = new Renderer(shape);

        renderer.draw();
    }
}
