var Timeline = function(cfg, selector) {
    this.RADIUS = 7;

    this.canvasSelector = selector;
    this.canvas = new Canvas(this.canvasSelector);
    this.canvas.init();

    this.positions = this.setPositions(cfg);
    this.coordinates = this.setCoordinates(cfg);

    this.bind();
    this.draw();
}

Timeline.prototype = {
    bind: function() {
        var canvas = document.getElementById(this.canvasSelector);

        // detect whether you have clicked on a circle or not
        canvas.addEventListener('click', this.handleClick.bind(this), false);
    },

    draw: function() {
        this.canvas.setCoordinates(this.coordinates);
        this.canvas.redraw();
    },

    handleClick: function(e) {
        var mouseX = e.layerX, mouseY = e.layerY, circleClickedIdx;

        circleClickedIdx = this.getCircle(mouseX, mouseY);

        if(circleClickedIdx != -1) {
            // change the color
            // display some text
            // change the timeline
            console.log("circle was clicked");
        }
    },

    getCircle: function(mouseX, mouseY) {
        var x, y, r, i, coords = this.coordinates;

        for(i = 0; i < coords.length; i++) {
            x = coords[i].x - mouseX;
            y = coords[i].y - mouseY;
            r = coords[i].radius;

            if(x * x + y * y < r * r) {
                return i;
            }
        }

        return -1;
    },

    setCoordinates: function(cfg) {
        var i = 0,
            height = document.getElementById(this.canvasSelector).height,
            width = document.getElementById(this.canvasSelector).width,
            numCircles = cfg.length,
            startPos = this.RADIUS,
            pxInterval = Math.floor(width / numCircles),
            coordinates = [];

        for(i = 0; i < numCircles; i++) {
            coordinates.push({x: startPos + pxInterval * i, y: height / 2, radius: this.RADIUS});
        }

        return coordinates;
    },

    setPositions: function(cfg) {
        var positions = [], i;

        for(i = 0; i < cfg.length; i++) {
            switch(cfg[i].position) {
                case "Scott":
                case "scott":
                    positions.push(0);
                    break;
                case "Jess":
                case "jess":
                    positions.push(1);
                    break;
                case "Both":
                case "both":
                    positions.push(2);
                    break;
                default:
                    console.error("invalid position passed into config");
            }
        }

        return positions;
    }
};
