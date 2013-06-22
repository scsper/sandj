function Canvas(selector) {
    this.selector = selector;
}

Canvas.prototype = {
    init: function() {
        this.bind();
        this.resize();
    },

    bind: function() {
        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', this.resize.bind(this), false);
    },

    resize: function() {
        this.canvas = document.getElementById(this.selector);
        this.canvas.width = document.getElementsByClassName("main")[0].offsetWidth;
        this.canvas.height = window.innerHeight - document.getElementsByClassName("main")[0].offsetHeight - document.getElementsByClassName("pure-menu")[0].offsetHeight;

        this.draw();
    },

    draw: function() {
        var height = this.canvas.height / 2;
        this.drawLine([0, height], [this.canvas.width, height]);
    },

    drawLine: function(start, end) {
        var canvas = this.canvas,
            ctx = canvas.getContext("2d");

        ctx.translate(.5, .5);

        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    },

    drawCircle: function() {

    }
};