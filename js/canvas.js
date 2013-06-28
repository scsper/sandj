function Canvas(selector) {
    this.selector = selector;
    this.circleCoords = [];
}

Canvas.prototype = {
    init: function() {
        this.bind();
        this.resize();
    },

    bind: function() {
        var canvas = document.getElementById(this.selector);

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', this.resize.bind(this), false);

        // detect whether you have clicked on a circle or not
        canvas.addEventListener('click', this.handleClick.bind(this), false);
    },

    resize: function() {
        this.canvas = document.getElementById(this.selector);
        this.canvas.width = document.getElementsByClassName("main")[0].offsetWidth;
        this.canvas.height = document.getElementsByTagName("body")[0].offsetHeight - document.getElementsByClassName("main")[0].offsetHeight;

        this.draw();
    },

    handleClick: function(e) {
        var mouseX = e.layerX, mouseY = e.layerY, circleClickedIdx;

        circleClickedIdx = Timeline.getCircle(this.circleCoords, mouseX, mouseY);

        if(circleClickedIdx != -1) {
            // change the color
            // display some text
            // change the timeline
            console.log("circle was clicked");
        }
    },

    draw: function() {
        var height = this.canvas.height / 2;
        this.drawLine([0, height], [this.canvas.width, height]);
        this.drawCircle(20, height, 20);
    },

    drawLine: function(start, end) {
        var ctx = this.canvas.getContext("2d");

        ctx.translate(.5, .5); // get rid of blurriness

        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    },

    drawCircle: function(x, y, radius, style) {
        var ctx = this.canvas.getContext("2d");

        // switch on the style to different colors

        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 0, 0, .5)"
        ctx.arc(x, y, radius, 0, 2*Math.PI); // start and end of the arc
        ctx.fill();
        ctx.stroke();

        this.circleCoords.push({x: x, y: y, radius: radius});
        console.log(this.circleCoords);
    }
};