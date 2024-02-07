class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
            // If w or h is 0 or not a positive integer, create an empty object
            return {};
        }
        // Initialize instance attributes width and height with the values of w and h
        this.width = w;
        this.height = h;
    }
}

module.exports = Rectangle;
