function Carousel(cfg) {
    this.cfg = cfg;
    this.imageContainer = document.getElementById('carousel-img-container');
    this.textHeader = document.getElementById('carousel-text-header');
    this.textBody = document.getElementById('carousel-text-body');
    this.idx = 0;
    this.init();
};

Carousel.prototype = {
    init: function(){
        var _this = this, i,
            forwardArrow = document.getElementsByClassName("forward-arrow")[0],
            backArrow = document.getElementsByClassName("back-arrow")[0];

        forwardArrow.addEventListener("click", this.next.bind(this), false);
        backArrow.addEventListener("click", this.previous.bind(this), false);
    },

    next: function() {
        (this.idx !== this.cfg.length - 1) ? this.idx++ : this.idx;
        this.switchImage();
    },

    previous: function() {
        this.idx ? this.idx-- : this.idx;
        this.switchImage();
    },

    switchImage: function() {
        this.imageContainer.src = "assets/" + this.cfg[this.idx].img;
        this.textHeader.innerHTML = this.cfg[this.idx].header;
        this.textBody.innerHTML = this.cfg[this.idx].text;
    },

    run: function() {
        var _this = this;

        var switchImageWrapper = function() {
            _this.switchImage();
        }
        _this.timer = setInterval(switchImageWrapper, 6000);
    }
};
