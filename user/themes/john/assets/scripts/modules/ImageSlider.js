import $ from "jquery";
import vegas from "vegas";

class ImageSlider {
    constructor() {
        this.imageContainer = $(".image-container");
        this.contentContainer = $(".content-container");
        this.contentContainerHeight = this.contentContainer.outerHeight();
        this.setImages();
        this.setContainerHeight();
        this.checkWindowResize()
    }

    setImages() {
        this.imageContainer.vegas({
            delay: 5000,
            timer: false,
            shuffle: true,
            transition: 'fade',
            transitionDuration: 3000,
            slides: [
                { src: "/user/themes/john/assets/images/slide-1.jpg" },
                { src: "/user/themes/john/assets/images/slide-2.jpg" },
                { src: "/user/themes/john/assets/images/slide-3.jpg" },
                { src: "/user/themes/john/assets/images/slide-4.jpg" },
                { src: "/user/themes/john/assets/images/slide-5.jpg" },
                { src: "/user/themes/john/assets/images/slide-6.jpg" },
                { src: "/user/themes/john/assets/images/slide-7.jpg" },
                { src: "/user/themes/john/assets/images/slide-8.jpg" }
            ]
        });
    }
    
    setContainerHeight() {
        this.imageContainer.css({ 'height': $(document).innerHeight() - this.contentContainerHeight + 'px'});
    }

    checkWindowResize() {
        let that = this;
        $( window ).resize(function() {
            that.contentContainerHeight = that.contentContainer.outerHeight();
            that.setContainerHeight();
          });
    }
}

export default ImageSlider;