function Canvas(selector) {
    this.selector = selector;
    this.coordinates = [];
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
        this.canvas.height = document.getElementsByTagName("body")[0].offsetHeight - document.getElementsByClassName("main")[0].offsetHeight;

        this.redraw();
    },

    redraw: function() {
        var height = this.canvas.height / 2, i, coords = this.coordinates,
            ctx = this.canvas.getContext("2d");

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //erase the canvas

        this.drawLine([0, height], [this.canvas.width, height]);

        for(i = 0; i < coords.length; i++) {
            this.drawCircle(coords[i].x, coords[i].y, coords[i].radius, coords[i].active);
        }
    },

    drawLine: function(start, end) {
        var ctx = this.canvas.getContext("2d");

        // ctx.translate(.5, .5); // get rid of blurriness... doesn't work when redrawing so never mind

        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    },

    drawCircle: function(x, y, radius, active) {
        var ctx = this.canvas.getContext("2d");

        // switch on the style to different colors

        ctx.beginPath();
        if(active) {
            ctx.fillStyle = "rgba(255, 0, 0, .3)";
        } else {
            ctx.fillStyle = "rgba(0, 0, 0, .3)";
        }
        ctx.arc(x, y, radius, 0, 2*Math.PI); // start and end of the arc
        ctx.fill();
        ctx.stroke();
    },

    setCoordinates: function(coords) {
        this.coordinates = coords;
    }
};