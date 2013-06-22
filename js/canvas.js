function Canvas(selector) {
    this.canvas = document.getElementById(selector);
}

Canvas.prototype = {
    init: function() {
    },

    drawLine: function(start, end) {
        var canvas = this.canvas,
            ctx = canvas.getContext("2d");

        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    },

    drawCircle: function() {

    }
};