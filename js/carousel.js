function Carousel(imgArray, imgWidth) {
    this.images = imgArray;
    this.imageLength = this.images.length;
    this.imageWidth = imgWidth;
    this.imageCount = 0;
    this.init();
};

Carousel.prototype = {
    init: function(){
        var _this = this, i;


        //initialize images
        var imageNavList = document.getElementsByClassName("image_nav_list");
        $('.image_nav_list').append('<li><img src=assets/bttn-left.gif></li>');
        for (i = 0; i < this.imageLength; ++i ) {
            $('.image_list').append('<li><img src='+this.images[i]+'></li>');

            if(i == 0) {
                $('.image_nav_list').append('<li><img src=assets/bttn-on.gif></li>');
            } else {
                $('.image_nav_list').append('<li><img src=assets/bttn-off.gif></li>');
            }
        }

        $('.image_nav_list').append('<li><img src=assets/bttn-right.gif></li>');

        //initialize click
        $('.image_nav_list').on("click", 'li', function() {
            clearInterval(that.timer);
            var $this = $(this);
            var idx = $this.index();
            if(idx === 0){//if it is the left arrow
                that.switchImage(-1);
            }else if(idx > that.imageLength ){//if it is the right arrow
                that.switchImage();
            }else{
                that.switchImage(idx);
            }

            that.run();
        });
    },

    switchImage: function(idx) {
        var firstimg = $($('.image_scroller').children()[0]);
        var firstpos = firstimg.offset();
        var toMove;
        if(idx == null){ // if default movement required
            this.imageCount++;
        }else if(idx == -1 ){//backwards movement required
            if(this.imageCount === 0 ){
                this.imageCount = this.imageLength -1;
            }else{
                this.imageCount = this.imageCount -1 ;
            }
        }else{// if specific image is required
            this.imageCount = idx-1;
        }
        var navpos   = this.imageCount + 1;
        toMove = this.imageWidth*this.imageCount;
        $('.image_nav_list').children('li').slice(1,this.imageLength + 1).html('<img src=assets/bttn-off.gif>');
        if(this.imageCount < this.imageLength) {
            $('.image_nav_list').children('li').eq(navpos).html('<img src=assets/bttn-on.gif>');
            firstimg.animate({ 'marginLeft' : '-'+toMove+'px'}, 1000, null);
        } else {
            this.imageCount = 0;
            $('.image_nav_list').children('li').eq(navpos-(this.imageLength)).html('<img src=assets/bttn-on.gif>');
            firstimg.animate({ 'marginLeft' : '0px'}, 1000, null);
        }
    },

    run: function() {
        var _this = this;

        var switchImageWrapper = function() {
            _this.switchImage();
        }
        _this.timer = setInterval(switchImageWrapper, 6000);
    }
};
