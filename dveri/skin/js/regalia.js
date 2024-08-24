/*********************************************************************************
    Home Page v7 Header Menu JS 
*********************************************************************************/
$(".navbar-toggler").click(function() {
    if ($(".homepage-v7-header .navbar-toggler").hasClass("collapsed")) {
        $(this).parents(".homepage-v7-header").removeClass("headerchanged");
    } else {
        $(this).parents(".homepage-v7-header").addClass("headerchanged");
    }
});
$("#open-bottom").click(function() {
    $(".seo-text").toggleClass('seo-text-opened');
});
/*********************************************************************************
    Home Page v7 Sticky Header JS 
*********************************************************************************/
window.onscroll = function() {
    myFunction();
};

function myFunction() {
    if ($(window).scrollTop() > 0) {
        $(".homepage-v7-header").addClass("stickyNav");
    } else {
        $(".homepage-v7-header").removeClass("stickyNav");
    }
}

var helpers = {
    addZeros: function(n) {
        return n < 5 ? "0" + n : "" + n;
    },
};

$(function() {
    jQuery.validator.addMethod("phone", function(phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
            phone_number.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
    }, "Введите номер телефона");

    $("#doormaster").validate({
        rules: {
            firstname: "required",
            phone: {
                required: true,
                phone: true
            }
        },
        ignore: "div:hidden input, div:hidden select",
        messages: {
            firstname: "Введите имя",
            phone: {
                required: "Введите номер телефона"
            }
        },
        submitHandler: function(form) {
            var $form = $(form);
            $form.ajaxSubmit({
                url: $form.attr("action"),
                type: "post",
                dataType: 'json',
                success: function(data) {
                    $form.remove(".alert");
                    if (data.success_msg) {
                        $form.find('input[name="firstname"]').val('');
                        $form.find('input[name="phone"]').val('');
                        $form.find('.alert').remove();
                        $form.prepend(data.success_msg);
                    }

                    if (data.error_msg) {
                        $form.find('.alert').remove();
                        $form.prepend(data.error_msg);
                    }
                }
            });
        }
    });

    $('input[name=phone]').inputmask({
        mask: "+38 (999) 999 99 99",
        clearMaskOnLostFocus: false
    });
});
$(function() {
    jQuery.validator.addMethod("phone", function(phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
            phone_number.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
    }, "Введите номер телефона");

    $("#doormasterfoo").validate({
        rules: {
            firstname: "required",
            phone: {
                required: true,
                phone: true
            }
        },
        ignore: "div:hidden input, div:hidden select",
        messages: {
            firstname: "Введите имя",
            phone: {
                required: "Введите номер телефона"
            }
        },
        submitHandler: function(form) {
            var $form = $(form);
            $form.ajaxSubmit({
                url: $form.attr("action"),
                type: "post",
                dataType: 'json',
                success: function(data) {
                    $form.remove(".alert");
                    if (data.success_msg) {
                        $form.find('input[name="firstname"]').val('');
                        $form.find('input[name="phone"]').val('');
                        $form.find('.alert').remove();
                        $form.prepend(data.success_msg);
                    }

                    if (data.error_msg) {
                        $form.find('.alert').remove();
                        $form.prepend(data.error_msg);
                    }
                }
            });
        }
    });

    $('input[name=phone]').inputmask({
        mask: "+38 (999) 999 99 99",
        clearMaskOnLostFocus: false
    });
});
$(function() {
    jQuery.validator.addMethod("phone", function(phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
            phone_number.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
    }, "Введите номер телефона");

    $("#callback").validate({
        rules: {
            firstname: "required",
            phone: {
                required: true,
                phone: true
            }
        },
        ignore: "div:hidden input, div:hidden select",
        messages: {
            firstname: "Введите имя",
            phone: {
                required: "Введите номер телефона"
            }
        },
        submitHandler: function(form) {
            var $form = $(form);
            $form.ajaxSubmit({
                url: $form.attr("action"),
                type: "post",
                dataType: 'json',
                success: function(data) {
                    $form.remove(".alert");
                    if (data.success_msg) {
                        $form.find('input[name="firstname"]').val('');
                        $form.find('input[name="phone"]').val('');
                        $form.find('.alert').remove();
                        $form.prepend(data.success_msg);
                    }

                    if (data.error_msg) {
                        $form.find('.alert').remove();
                        $form.prepend(data.error_msg);
                    }
                }
            });
        }
    });

    $('input[name=phone]').inputmask({
        mask: "+38 (999) 999 99 99",
        clearMaskOnLostFocus: false
    });
});
$(function() {
    jQuery.validator.addMethod("phone", function(phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
            phone_number.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
    }, "Введите номер телефона");

    $("#doorvideo").validate({
        rules: {
            firstname: "required",
            phone: {
                required: true,
                phone: true
            }
        },
        ignore: "div:hidden input, div:hidden select",
        messages: {
            firstname: "Введите имя",
            phone: {
                required: "Введите номер телефона"
            }
        },
        submitHandler: function(form) {
            var $form = $(form);
            $form.ajaxSubmit({
                url: $form.attr("action"),
                type: "post",
                dataType: 'json',
                success: function(data) {
                    $form.remove(".alert");
                    if (data.success_msg) {
                        $form.find('input[name="firstname"]').val('');
                        $form.find('input[name="phone"]').val('');
                        $form.find('.alert').remove();
                        $form.prepend(data.success_msg);
                    }

                    if (data.error_msg) {
                        $form.find('.alert').remove();
                        $form.prepend(data.error_msg);
                    }
                }
            });
        }
    });

    $('input[name=phone]').inputmask({
        mask: "+38 (999) 999 99 99",
        clearMaskOnLostFocus: false
    });
});

function sliderInit() {
    var $slider = $(".homepage-v7-slider-main");
    $slider.each(function() {
        var $sliderParent = $(this).parent();
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            autoplay: false,
            autoplaySpeed: 6000,
            infinite: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    adaptiveHeight: true,
                },
            }, ],
        });

        $(".homepage-v7-slider-slicknavbtnprev").on("click", function() {
            $(".homepage-v7-slider-main").slick("slickPrev");
        });
        $(".homepage-v7-slider-slicknavbtnnext").on("click", function() {
            $(".homepage-v7-slider-main").slick("slickNext");
        });

        if ($(this).find(".slick-slide").length > 1) {
            $(this).siblings(".homepage-v7-sliderCounterMain").show();
        }

        $(this).on("afterChange", function(event, slick, currentSlide) {
            $sliderParent.find(".homepage-v7-sliderCounterMain .active").html(helpers.addZeros(currentSlide + 1));
        });

        var sliderItemsNum = $(this).find(".slick-slide").not(".slick-cloned").length;
        $sliderParent.find(".homepage-v7-sliderCounterMain .total").html(helpers.addZeros(sliderItemsNum));
    });

    //   $('.slick-next').on('click', function () {
    //     console.log('test');
    //     $('.homepage-v7-slider-main').slick('slickGoTo', 5);
    // });
}

sliderInit();

/*********************************************************************************
    Home Page v7 Categories JS 
*********************************************************************************/
$(".homepage-v7-categories-wrap").slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 6000,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
});
$(".homepage-v7-categories-wrap-slicknavbtnprev").on("click", function() {
    $(".homepage-v7-categories-wrap").slick("slickPrev");
});
$(".homepage-v7-categories-wrap-slicknavbtnnext").on("click", function() {
    $(".homepage-v7-categories-wrap").slick("slickNext");
});

/*********************************************************************************
    Home Page v7 Featured Products JS 
*********************************************************************************/
$(".homepage-v7-featured-products-wrap").slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 6000,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(".homepage-v7-featured-products-slicknavbtnprev").on("click", function() {
    $(".homepage-v7-featured-products-wrap").slick("slickPrev");
});
$(".homepage-v7-featured-products-slicknavbtnnext").on("click", function() {
    $(".homepage-v7-featured-products-wrap").slick("slickNext");
});

/*********************************************************************************
    Home Page v7 Latest Blog JS 
*********************************************************************************/
$(".homepage-v7-latest-blog-wrap").slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 6000,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(".homepage-v7-latest-blog-slicknavbtnprev").on("click", function() {
    $(".homepage-v7-latest-blog-wrap").slick("slickPrev");
});
$(".homepage-v7-latest-blog-slicknavbtnnext").on("click", function() {
    $(".homepage-v7-latest-blog-wrap").slick("slickNext");
});

/*********************************************************************************
    Home Page v7 Our Brand Logo JS 
*********************************************************************************/
$(document).ready(function() {
    $(".customer-logos-2").slick({
        draggable: true,
        accessibility: false,
        centerMode: false,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        arrows: false,
        dots: false,
        swipeToSlide: 1,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

/*********************************************************************************
    Home Page v7 Quick View JS 
*********************************************************************************/
$(".homepage-v1-quickview-slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: false,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".homepage-v1-quickview").on("shown.bs.modal", function() {
    $(".homepage-v1-quickview-slider").slick("setPosition");
    $(".homepage-v1-quickview-slider-nav").slick("setPosition");
    $(".homepage-v1-quickview-slider-main").addClass("open");
});
$(".quickview-slider-thumbal").click(function() {
    var imgurl1 = $(this).find("img").attr("src");
    $(".homepage-v1-quickview-slider-img").attr({ src: imgurl1, "data-zoom-image": imgurl1 });
});

/*----------------- Home Page v7 Quick View Color -----------------*/
$(document).ready(function() {
    $(document).on("click", ".quickview-product-color-swatch_01 .color_01", function() {
        $(".quickview-product-color-swatch_01 .color_01").removeClass("active");
        $(this).addClass("active");
        colorvalchange();
    });
});

function colorvalchange() {
    var colorval = $(".quickview-product-color-swatch_01 .color_01.active").text();
    $(".color-title_01-val").text(colorval);
}
colorvalchange();

/*----------------- Home Page v7 Quick View Size -----------------*/
$(document).ready(function() {
    $(document).on("click", ".quickview-product-size-swatch_01 .size_01", function() {
        $(".quickview-product-size-swatch_01 .size_01").removeClass("active");
        $(this).addClass("active");
        sizevalchange();
    });
});

function sizevalchange() {
    var sizeval = $(".quickview-product-size-swatch_01 .size_01.active").text();
    $(".size-title_01-val").text(sizeval);
}
sizevalchange();

/*----------------- Home Page v7 Quick View Quantity -----------------*/
$(document).ready(function() {
    var quantity = 1;
    $(".input-center").val(quantity);
    $(".bttn-left").click(function(event) {
        if (quantity > 1) {
            quantity--;
            $(this).siblings(".input-center").val(quantity);
        }
    });
    $(".bttn-right").click(function(event) {
        quantity++;
        $(this).siblings(".input-center").val(quantity);
    });
});

/*********************************************************************************
    Home Page v7 Footer Back To Top Button JS 
*********************************************************************************/
$(function() {
    //Scroll event
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $(".footer-to-top").fadeIn("slow");
        if (scrolled < 300) $(".footer-to-top").fadeOut("slow");
    });
    //Click event
    $(".footer-to-top").click(function() {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });
});

/*********************************************************************************
    About Page v1 Count Area JS 
*********************************************************************************/
$(".counting").each(function() {
    var $this = $(this),
        countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate({
        countNum: countTo,
    }, {
        duration: 3000,
        easing: "linear",
        step: function() {
            if (this.countNum < 10) {
                $this.text("0" + Math.floor(this.countNum)).slice(-2);
            } else {
                $this.text(Math.floor(this.countNum));
            }
        },
        complete: function() {
            if (this.countNum < 10) {
                $this.text("0" + this.countNum).slice(-2);
            } else {
                $this.text(this.countNum);
            }
            //alert('finished');
        },
    });
});

/*********************************************************************************
    About Page v1 Our Clients Popular Brands JS 
*********************************************************************************/
$(document).ready(function() {
    $(".our-clients-popular-brands-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

/*********************************************************************************
    About Page v2 Our Clients Say JS 
*********************************************************************************/
$(document).ready(function() {
    $(".our-clients-say-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
    });
});
$(".ourclientssayslider-navbtnprev").on("click", function() {
    $(".our-clients-say-slider").slick("slickPrev");
});
$(".ourclientssayslider-navbtnnext").on("click", function() {
    $(".our-clients-say-slider").slick("slickNext");
});

/*********************************************************************************
    Shop Page v1 JS 
*********************************************************************************/
/*----------------- Shop Page v1 Sidebar Filter Categories -----------------*/
$(document).ready(function() {
    $(document).on("click", ".item-categories-01 .categories-01", function() {
        $(".item-categories-01 .categories-01").removeClass("active");
        $(this).addClass("active");
    });
});



/*----------------- Shop Page v1 Sidebar Filter Size -----------------*/
$(document).ready(function() {
    $(document).on("click", ".item-size-01 .size-01", function() {
        $(".item-size-01 .size-01").removeClass("active");
        $(this).addClass("active");
    });
});

/*----------------- Shop Page v1 Sidebar Filter Brand -----------------*/
$(document).ready(function() {
    $(document).on("click", ".item-brand-01 .brand-01", function() {
        $(".item-brand-01 .brand-01").removeClass("active");
        $(this).addClass("active");
    });
});

/*----------------- Shop Page v1 Sidebar Filter Color -----------------*/
$(document).ready(function() {
    $(document).on("click", ".item-color-01 .color-01", function() {
        $(".item-color-01 .color-01").removeClass("active");
        $(this).addClass("active");
    });
});

/*----------------- Shop Page v1 Sidebar Filter Tags -----------------*/
$(document).ready(function() {
    $(document).on("click", ".item-tags-01 .tags-01", function() {
        $(".item-tags-01 .tags-01").removeClass("active");
        $(this).addClass("active");
    });
});

/*----------------- Shop Page v1 Sidebar Filter Click To Open -----------------*/
$(".left-sidebar-toggle").click(function() {
    $(".sidebar-content").addClass("active");
    $(".sidebar-close").addClass("active");
    $(".sidebar-overlay").addClass("active");
});
$(".sidebar-close").click(function() {
    $(".sidebar-content").removeClass("active");
    $(this).removeClass("active");
    $(".sidebar-overlay").removeClass("active");
});
$(".sidebar-overlay").click(function() {
    $(".sidebar-close").trigger("click");
});

/*----------------- Shop Page v4 Sidebar Filter Click To Open -----------------*/
$(".sidebar-toggle").click(function() {
    $(this).addClass("active");
    setTimeout(function() {
        $(".sidebar-content").addClass("active");
        $(".sidebar-close").addClass("active");
        $(".sidebar-overlay").addClass("active");
    }, 300);
});
$(".sidebar-close").click(function() {
    if ($(".sidebar-toggle").length) {
        $(".sidebar-toggle").removeClass("active");
    }
    var sidebarclose = $(this);
    $(".sidebar-content").removeClass("active");
    sidebarclose.removeClass("active");
    $(".sidebar-overlay").removeClass("active");
});
$(".sidebar-overlay").click(function() {
    if ($(".sidebar-toggle").length) {
        $(".sidebar-toggle").removeClass("active");
    }
    $(".sidebar-close").trigger("click");
});

/*----------------- Shop Page v4 Topbar Filter -----------------*/
$(document).ready(function() {
    $(".filter-actions-two").click(function() {
        if ($(window).width() > 991) {
            if ($("#filterdropdownbox-shop4").hasClass("active")) {
                $("#filterdropdownbox-shop4").removeClass("show");
                setTimeout(function() {
                    $("#filterdropdownbox-shop4").removeClass("active");
                }, 295);
                $(".accordion-filter-clear").fadeOut(300);
            } else {
                $("#filterdropdownbox-shop4").addClass("active");
                setTimeout(function() {
                    $("#filterdropdownbox-shop4").addClass("show");
                }, 100);
                $(".accordion-filter-clear").fadeIn(100);
            }
        }
    });
    $(".accordion-filter-clear").click(function(e) {
        e.stopPropagation();
    });
});

/*********************************************************************************
    Single Product v1 Page JS 
*********************************************************************************/
/*----------------- Single Product v1 Page Slider -----------------*/
$(".single-product-v1-detail-slider-thumbnail > img").click(function() {
    $(".single-product-v1-detail-slider-thumbnail > img").removeClass("active");
    $(this).addClass("active");

    var imgsrc = $(this).attr("src");
    $(".single-product-v1-detail-slider-img-span>a").attr({ href: imgsrc });
    $(".single-product-v1-detail-sliderimg").attr({ src: imgsrc });
});
$(".single-product-v1-detail-slider-img").mouseenter(function() {
    var imgsrc1 = $(".single-product-v1-detail-slider-img-span > a > img").attr("src");
    $(".easyzoom-flyout > img").attr({ src: imgsrc1 });
});
$(".single-product-v1-detail-slider-multiple-items").slick({
    infinite: true,
    slidesToShow: 4,
    vertical: true,
    verticalSwiping: true,
    centerPadding: "0",
    draggable: true,
    slidesToScroll: 1,
});

/*----------------- Single Product v1 Page Size -----------------*/
$(document).ready(function() {
    $(document).on("click", ".size-swatch-1 .size-1", function() {
        $(".size-swatch-1 .size-1").removeClass("active");
        $(this).addClass("active");
    });
});

/*----------------- Single Product v1 Page Color -----------------*/
$(document).ready(function() {
    $(document).on("click", ".color-swatch-1 .color-1", function() {
        $(".color-swatch-1 .color-1").removeClass("active");
        $(this).addClass("active");
    });
});

/*********************************************************************************
    Single Product v2 Page JS 
*********************************************************************************/
/*----------------- Single Product v2 Page Slider -----------------*/
$(".single-product-v2-detail-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0px',
});
$(".single-product-v2-slicknavbtnprev").on("click", function() {
    $(".single-product-v2-detail-slider").slick("slickPrev");
});
$(".single-product-v2-slicknavbtnnext").on("click", function() {
    $(".single-product-v2-detail-slider").slick("slickNext");
});

/*********************************************************************************
    Single Product v3 Page JS 
*********************************************************************************/
/*----------------- Single Product v3 Page Slider -----------------*/
$(".single-product-v3-detail-page-slider-large").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".single-product-v3-detail-page-slider-thumbnail",
});
$(".single-product-v3-slicknavbtnprev").on("click", function() {
    $(".single-product-v3-detail-page-slider-large").slick("slickPrev");
});
$(".single-product-v3-slicknavbtnnext").on("click", function() {
    $(".single-product-v3-detail-page-slider-large").slick("slickNext");
});
$(".single-product-v3-detail-page-slider-thumbnail").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".single-product-v3-detail-page-slider-large",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
});
$(".single-product-v3-slicknavbtnprev").on("click", function() {
    $(".single-product-v3-detail-page-slider-thumbnail").slick("slickPrev");
});
$(".single-product-v3-slicknavbtnnext").on("click", function() {
    $(".single-product-v3-detail-page-slider-thumbnail").slick("slickNext");
});

/*----------------- Single Product v3 Page Size -----------------*/
$(document).ready(function() {
    $(document).on("click", ".size-swatch-3 .size-3", function() {
        $(".size-swatch-3 .size-3").removeClass("active");
        $(this).addClass("active");
    });
});

/*----------------- Single Product v3 Page Color -----------------*/
$(document).ready(function() {
    $(document).on("click", ".color-swatch-3 .color-3", function() {
        $(".color-swatch-3 .color-3").removeClass("active");
        $(this).addClass("active");
    });
});

/*********************************************************************************
    Single Product v4 Page JS 
*********************************************************************************/
/*----------------- Single Product v4 Page Slider -----------------*/
$(".single-product-v4-detail-slider-item").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
});
$(".single-product-v4-slicknavbtnprev").on("click", function() {
    $(".single-product-v4-detail-slider-item").slick("slickPrev");
});
$(".single-product-v4-slicknavbtnnext").on("click", function() {
    $(".single-product-v4-detail-slider-item").slick("slickNext");
});

/*----------------- Single Product v4 Page Color -----------------*/
$(document).ready(function() {
    $(document).on("click", ".color-swatch-4 .color-4", function() {
        $(".color-swatch-4 .color-4").removeClass("active");
        $(this).addClass("active");
        colorvalchange1();
    });
});

function colorvalchange1() {
    var colorval = $(".color-swatch-4 .color-4.active").text();
    $(".color-title-4-val").text(colorval);
}
colorvalchange1();

/*----------------- Single Product v4 Page Size -----------------*/
$(document).ready(function() {
    $(document).on("click", ".size-swatch-4 .size-4", function() {
        $(".size-swatch-4 .size-4").removeClass("active");
        $(this).addClass("active");
        sizevalchange1();
    });
});

function sizevalchange1() {
    var sizeval = $(".size-swatch-4 .size-4.active").attr("data-size");
    $(".size-title-4-val").text(sizeval);
}
sizevalchange1();

/*********************************************************************************
    Single Product v5 Page JS 
*********************************************************************************/
/*----------------- Single Product v5 Page Slider -----------------*/
$(".single-product-v5-detail-page-slider-large").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".single-product-v5-detail-page-slider-thumbnail",
});
$(".single-product-v5-slicknavbtnprev").on("click", function() {
    $(".single-product-v5-detail-page-slider-large").slick("slickPrev");
});
$(".single-product-v5-slicknavbtnnext").on("click", function() {
    $(".single-product-v5-detail-page-slider-large").slick("slickNext");
});
$(".single-product-v5-detail-page-slider-thumbnail").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".single-product-v5-detail-page-slider-large",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
});
$(".single-product-v5-slicknavbtnprev").on("click", function() {
    $(".single-product-v5-detail-page-slider-thumbnail").slick("slickPrev");
});
$(".single-product-v5-slicknavbtnnext").on("click", function() {
    $(".single-product-v5-detail-page-slider-thumbnail").slick("slickNext");
});

/*----------------- Single Product v5 Page Size -----------------*/
$(document).ready(function() {
    $(document).on("click", ".size-swatch-5 .size-5", function() {
        $(".size-swatch-5 .size-5").removeClass("active");
        $(this).addClass("active");
    });
});

/*----------------- Single Product v5 Page Color -----------------*/
$(document).ready(function() {
    $(document).on("click", ".color-swatch-5 .color-5", function() {
        $(".color-swatch-5 .color-5").removeClass("active");
        $(this).addClass("active");
    });
});

/*----------------- Single Product v5 Page Custom Accordion js -----------------*/
function customacc() {
    if ($(".custom-accordion-5 .accordion-button").attr("aria-expanded") == "true") {
        $(".custom-accordion-5 .accordion-button[aria-expanded='true']").parents(".accordion-item").addClass("active");
    } else {
        $(".custom-accordion-5 .accordion-button[aria-expanded='false']").parents(".accordion-item").removeClass("active");
    }
}
$(document).ready(function() {
    customacc();
    $(document).on("click", ".custom-accordion-5 .accordion-button", function() {
        var thisitem = $(this);
        if ($(thisitem).attr("aria-expanded") == "true") {
            $(".accordion-item").removeClass("active");
            $(thisitem).parents(".accordion-item").addClass("active");
        } else {
            $(thisitem).parents(".accordion-item").removeClass("active");
        }
    });
});

/*********************************************************************************
    Coming Soon Page Countdown JS 
*********************************************************************************/
$(".coming-soon-page-clock-c").countdown("2022/01/10", function(event) {
    $(this).html(
        event.strftime(
            "" +
            '<div class="countdown-maindiv"><h2 class="title">%D</h2> <p class="subtitle">Days</p></div><span class="coma">:</span>' +
            '<div class="countdown-maindiv"><h2 class="title">%H</h2> <p class="subtitle">Hours</p></div><span class="coma">:</span>' +
            '<div class="countdown-maindiv"><h2 class="title">%M</h2> <p class="subtitle">Minutes</p></div><span class="coma">:</span>' +
            '<div class="countdown-maindiv"><h2 class="title">%S</h2> <p class="subtitle">Seconds</p></div>'
        )
    );
});

/*********************************************************************************
    Cart Page v1 Page JS 
*********************************************************************************/
/*----------------- Cart Page v1 Page Quantity js -----------------*/
$(".cart-page-v1-quantity-plus1").click(function() {
    var th = $(this).closest(".cart-page-v1-input-group").find(".cart-page-v1-quantity1");
    th.val(+th.val() + 1);
});
$(".cart-page-v1-quantity-minus1").click(function() {
    var th = $(this).closest(".cart-page-v1-input-group").find(".cart-page-v1-quantity1");
    if (th.val() > 1) th.val(+th.val() - 1);
});

/*
$("#offcanvas").click(function() {

    var $offCanvas = $("#offcanvas"),
        $offCanvasCart = $("#offcanvas-cart"),
        $offCanvasOverlay = $(".offcanvas-overlay");
    if ($offCanvasCart.hasClass('show')) {
        return $offCanvas.removeClass("show"), $offCanvasCart.removeClass("show"), $offCanvasOverlay.fadeOut();
    }

});
*/

$(".offcanvas-overlay").click(function() {

    var $offCanvas = $("#offcanvas"),
        $offCanvasCart = $("#offcanvas-cart"),
        $offCanvasOverlay = $(".offcanvas-overlay");

    return $offCanvas.removeClass("show"), $offCanvasCart.removeClass("show"), $offCanvasOverlay.fadeOut();

});

/*********************************************************************************
    Cart Page v2 Page JS 
*********************************************************************************/
/*----------------- Cart Page v2 Page Quantity js -----------------*/
$(".cart-page-v2-quantity-plus1").click(function() {
    var th = $(this).closest(".cart-page-v2-input-group").find(".cart-page-v2-quantity1");
    th.val(+th.val() + 1);
});
$(".cart-page-v2-quantity-minus1").click(function() {
    var th = $(this).closest(".cart-page-v2-input-group").find(".cart-page-v2-quantity1");
    if (th.val() > 1) th.val(+th.val() - 1);
});

/*********************************************************************************
    Checkout Page JS 
*********************************************************************************/
/*----------------- Checkout Page Login-Toggle Coupon-Toggle checkbox1-Toggle checkbox2-Toggle js -----------------*/
$(document).ready(function() {
    $(".checkout-page-login-toggle").click(function() {
        $(".checkout-page-login-content").slideToggle();
    });
    $(".checkout-page-coupon-toggle").click(function() {
        $(".checkout-page-coupon-content").slideToggle();
    });
    checkboxclickfun1();
    checkboxclickfun2();
});

function checkboxclickfun1() {
    if ($("#create-an-account").is(":checked")) {
        $(".checkout-page-checkbox1-content").slideDown();
    } else {
        $(".checkout-page-checkbox1-content").slideUp();
    }
}
$("#create-an-account").on("click", function() {
    checkboxclickfun1();
});

function checkboxclickfun2() {
    if ($("#ship-to-a-different-address").is(":checked")) {
        $(".checkout-page-checkbox2-content").slideDown();
    } else {
        $(".checkout-page-checkbox2-content").slideUp();
    }
}
$("#ship-to-a-different-address").on("click", function() {
    checkboxclickfun2();
});

/*********************************************************************************
    Account Details Page JS 
*********************************************************************************/
/*----------------- Account Details Page Manage Addresses js -----------------*/
$(document).ready(function() {
    $(".account-details-page-add-a-new-address").click(function() {
        $(".account-details-page-add-a-new-address-form").slideToggle();
    });
    $(".account-details-page-cancel-link").click(function() {
        $(".account-details-page-add-a-new-address-form").slideUp();
    });
});

/*********************************************************************************
    Stores Listing Page Vendor JS 
*********************************************************************************/
/*----------------- Stores Listing Page Vendor js -----------------*/
$(document).ready(function() {
    $(".stores-listing-page-vendor-search-toggle").click(function() {
        $(".stores-listing-page-vendor-search-wrapper").slideToggle();
    });
    $(".stores-listing-page-vendor-cancel").click(function() {
        $(".stores-listing-page-vendor-search-wrapper").slideUp();
    });
});
/*----------------------------
       Cart Plus Minus Button
   ------------------------------ */
/*
var CartPlusMinus = $('.qty-block');
CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
CartPlusMinus.append('<div class="inc qtybutton">+</div>');
$(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    $button.parent().find("input").val(newVal);
});*/


$(function() {
    //Клик по звезде
    $('.rating-stars .fa-star').click(function() {
        var index = $(this).prevAll().length;
        $('.star-rating .fa-star').addClass('deactive');
        for (var i = 0; i <= index; i++) {
            $('.star-rating .fa-star').eq(i).removeClass('deactive');
        }
        $('#review-rate-value').val(index + 1);
    });
    //Ховер на звезды
    $('.rating-stars .fa-star').hover(function() {
        var index = $(this).prevAll().length;
        $('.rating-stars .fa-star').addClass('deactive');
        for (var i = 0; i <= index; i++) {
            $('.rating-stars .fa-star').eq(i).removeClass('deactive');
        }
    }, function() {
        var index = $('#review-rate-value').val() - 1;
        $('.rating-stars .fa-star').addClass('deactive');
        for (var i = 0; i <= index; i++) {
            $('.rating-stars .fa-star').eq(i).removeClass('deactive');
        }
    });
    //Кликаем по зведе по умолчанию
    $('.rating-stars .fa-star').eq($('#review-rate-value').val() - 1).trigger('click');
});



$(function() {
    var $reviewForm = $("#reviewsForm"),
        $h3ratting = $(".h3ratting"),
        $btnReview = $reviewForm.find(".btnsubmit");

    $reviewForm.validate({
        rules: {
            name: "required",
            review: "required"
        },
        ignore: "div:hidden input",
        ignore: ".ignore",
        messages: {
            name: "Представьтесь пожалуйста",
            review: "Введите отзыв"
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize(),
                success: function(data) {
                    $h3ratting.empty(),
                        $reviewForm.empty().append('Ваш отзыв отправлен, и будет опубликован после модерации. Спасибо!');
                }
            });
            return false;
        }
    });

    $btnReview.click(function() {
        $reviewForm.submit();
    });
});


$('.fast-order').click(function() {
    $('.nameblock').hide(500);
    $('.emailblock').hide(500);
    $('.deliveryblock').hide(500);
    $('.pickup').hide(500);
    $('.payblock').hide(500);
    $('.cardprivatblock').hide(500);
    $('.additional-info-wrap').hide(500);
});
$('.order').click(function() {
    if ($('.nameblock').first().is(":hidden")) {
        $('.nameblock').slideDown("slow");
        $('.emailblock').slideDown(500);
        $('.deliveryblock').slideDown(500);
        $('.pickup').slideDown(500);
        $('.payblock').slideDown(500);
        $('.cardprivatblock').slideDown(500);
        $('.additional-info-wrap').slideDown(500);
    }
});


$(function() {
    // copy content to clipboard
    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    // copy coupone code to clipboard
    $(".numbercard-btn").on("click", function() {
        copyToClipboard("#numbercard");
        $(".coupon-alert").fadeIn("slow");
    });
});


! function(e, o, l, c) {
    e.fn.circleNav = function(o) {
        var l = e.extend({}, e.fn.circleNav.settings, o);
        return this.each(function() {
            var o = e(this),
                c = e(".circle-nav-toggle"),
                a = e(".circle-nav-panel"),
                n = e(".circle-nav-menu");
            l.hasOverlay && 0 == e(".circle-nav-overlay").length && (e("body").append("<div class='circle-nav-overlay'></div>"), e(".circle-nav-overlay").css({ top: "0", right: "0", bottom: "0", left: "0", position: "fixed", "background-color": l.overlayColor, opacity: l.overlayOpacity, "z-index": "9", display: "none" })), e(".circle-nav-toggle, .circle-nav-item, .circle-nav-overlay").on("click", function() { o.stop().toggleClass("circle-nav-open"), c.stop().toggleClass("circle-nav-open"), a.stop().toggleClass("circle-nav-open"), n.stop().toggleClass("circle-nav-open"), e(".circle-nav-overlay").fadeToggle(), e("body").css("overflow") ? e("body, html").css("overflow", "") : e("body, html").css("overflow", "hidden") })
        })
    }, e.fn.circleNav.settings = { hasOverlay: !0, overlayColor: "#343434", overlayOpacity: ".7" }
}(jQuery, window, document);
$(function() { $("#circle-nav-wrapper").circleNav() });
