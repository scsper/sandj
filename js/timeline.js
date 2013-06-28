Timeline = (function() {
    function getCircle(circleCoords, mouseX, mouseY) {
        var x, y, r, i;

        for(i = 0; i < circleCoords.length; i++) {
            x = circleCoords[i].x - mouseX;
            y = circleCoords[i].y - mouseY;
            r = circleCoords[i].radius;

            if(x * x + y * y < r * r) {
                return i;
            }
        }

        return -1;
    }

    return {
        getCircle: getCircle
    };


})();