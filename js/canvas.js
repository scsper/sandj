function Canvas(selector) {
    this.canvas = document.getElementById(selector);
}

Canvas.prototype = {
    init: function() {
        this.bind();
        this.resize();
    },

    bind: function() {
        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', this.resize, false);
    },

    resize: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight - document.getElementsByClassName("main")[0];

        console.log("width: " + this.canvas.width);
        console.log("height: " + this.canvas.height);
        this.draw();
    },

    draw: function() {
        this.drawLine([0, 50], [50, 50]);
    },

    drawLine: function(start, end) {
        var canvas = this.canvas,
            ctx = canvas.getContext("2d");

        c.width = window.width;
        c.height = 100;

        ctx.translate(.5, .5);

        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    },

    drawCircle: function() {

    }
};