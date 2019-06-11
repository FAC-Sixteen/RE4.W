const sketch = p => {
    var dragging = false // Is the object being dragged?
    var rollover = false // Is the mouse over the ellipse?

    var x, y, w, h // Location and size
    var offsetX, offsetY // Mouseclick offset
    console.log(p)
    p.setup = () => {
        p.createCanvas(640, 360)
        p.background(100)

        // A rectangle

        // Starting location
        x = 100
        y = 100
        // Dimensions
        w = 50
        h = 50
    }

    p.draw = () => {
        p.background(255)

        p.fill(204, 101, 192, 127)
        p.stroke(127, 63, 120)
        p.rect(0, 0, 320, 360)

        p.fill(100, 101, 192, 127)
        p.rect(320, 0, 320, 360)
        // Is mouse over object
        if (
            p.mouseX > x &&
            p.mouseX < x + w &&
            p.mouseY > y &&
            p.mouseY < y + h
        ) {
            rollover = true
        } else {
            rollover = false
        }

        // Adjust location if being dragged
        if (dragging) {
            x = p.mouseX + offsetX
            y = p.mouseY + offsetY
        }

        p.stroke(0)
        // Different fill based on state
        if (dragging) {
            p.fill(50)
        } else if (rollover) {
            p.fill(100)
        } else {
            p.fill(175, 200)
        }
        if (x < 320) {
            p.fill(100, 101, 192, 127)
        } else {
            p.fill(204, 101, 192, 127)
        }

        p.myCustomRedrawAccordingToNewPropsHandler = function(newProps, x) {
            console.log(x)
            if (newProps.setResult && x < 320) {
                newProps.setResult(true)
            }
        }

        p.rect(x, y, w, h)
    }

    p.mousePressed = () => {
        // Did I click on the rectangle?
        if (
            p.mouseX > x &&
            p.mouseX < x + w &&
            p.mouseY > y &&
            p.mouseY < y + h
        ) {
            dragging = true
            // If so, keep track of relative location of click to corner of rectangle
            offsetX = x - p.mouseX
            offsetY = y - p.mouseY
        }
    }

    p.mouseReleased = () => {
        // Quit dragging
        dragging = false
    }
}

export default sketch
