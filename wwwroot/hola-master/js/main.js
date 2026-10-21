

(function ($) {

    "use strict";

    var cfg = {
        scrollDuration: 800, // smoothscroll duration
        mailChimpURL: ''   // mailchimp url
    },

        $WIN = $(window);


    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


    
    var ssPreloader = function () {

        var reveal = function () {
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
            $("#loader, #preloader").stop(true, true).hide();
        };

        if (document.readyState === "complete") {
            reveal();
            return;
        }

        $WIN.on('load', reveal);
        window.setTimeout(reveal, 1200);
    };


    
    var ssPrettyPrint = function () {
        if (typeof prettyPrint !== "function" || !$('pre').length) {
            return;
        }

        $('pre').addClass('prettyprint');
        $(document).ready(function () {
            prettyPrint();
        });
    };


    
    var ssMoveHeader = function () {

        var hero = $('.page-hero'),
            hdr = $('header'),
            triggerHeight = hero.outerHeight() - 170;


        var headerTicking = false;

        $WIN.on('scroll', function () {
            if (headerTicking) return;
            headerTicking = true;

            window.requestAnimationFrame(function () {
                headerTicking = false;
                var loc = window.pageYOffset || 0;

                hdr.toggleClass('sticky', loc > triggerHeight);
                hdr.toggleClass('offset', loc > triggerHeight + 20);
                hdr.toggleClass('scrolling', loc > triggerHeight + 150);
            });
        });






    };


    
    var ssMobileMenu = function () {

        var toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap');

        toggleButton.on('click', function (event) {
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');

        $WIN.on('resize', function () {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });

        nav.find('a').on("click", function () {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.slideToggle();
            }
        });

    };


    
    var ssMasonryFolio = function () {

        var containerBricks = $('.masonry');

        if (!containerBricks.length || typeof containerBricks.imagesLoaded !== "function" || typeof $.fn.masonry !== "function") {
            return;
        }

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                percentPosition: true,
                resize: true
            });
        });
    };


    
    var ssPhotoswipe = function () {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

        if (!$folioItems.length || !$pswp || typeof PhotoSwipe !== "function" || typeof PhotoSwipeUI_Default !== "function") {
            return;
        }

        $folioItems.each(function (i) {

            var $folio = $(this),
                $thumbLink = $folio.find('.thumb-link'),
                $title = $folio.find('.item-folio__title'),
                $caption = $folio.find('.item-folio__caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $size = $thumbLink.data('size').split('x'),
                $width = $size[0],
                $height = $size[1];

            var item = {
                src: $href,
                w: $width,
                h: $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        $folioItems.each(function (i) {

            $(this).on('click', function (e) {
                e.preventDefault();
                var options = {
                    index: i,
                    showHideOpacity: true
                }

                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });

        });

    };


    
    var ssSlickSlider = function () {

        if (!$('.testimonials__slider').length || typeof $.fn.slick !== "function") {
            return;
        }

        $('.testimonials__slider').slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: "<div class=\'slick-prev\'><i class=\'im im-arrow-left\' aria-hidden=\'true\'></i></div>",
            nextArrow: "<div class=\'slick-next\'><i class=\'im im-arrow-right\' aria-hidden=\'true\'></i></div>",
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

    };


    
    var ssWaypoints = function () {

        var sections = $(".target-section"),
            navigation_links = $(".header-nav li a");

        if (!sections.length || !navigation_links.length) {
            return;
        }

        var sectionDocTop = function (el) {
            var top = 0;
            var node = el;
            while (node) {
                top += node.offsetTop || 0;
                node = node.offsetParent;
            }
            return top;
        };

        var sectionTops = [];
        var activeId = null;
        var navTicking = false;

        var measureSections = function () {
            sectionTops = sections.map(function () {
                return { id: this.getAttribute("data-nav") || this.id, top: sectionDocTop(this) };
            }).get();
        };

        var updateCurrent = function () {
            navTicking = false;
            var marker = (window.pageYOffset || 0) + 120;
            var currentId = sectionTops.length ? sectionTops[0].id : sections.get(0).id;

            sectionTops.forEach(function (s) {
                if (s.top <= marker) currentId = s.id;
            });

            if (currentId === activeId) return;
            activeId = currentId;
            navigation_links.parent().removeClass("current");
            navigation_links.filter('[href="#' + currentId + '"]').parent().addClass("current");
        };

        $WIN.on("scroll", function () {
            if (navTicking) return;
            navTicking = true;
            window.requestAnimationFrame(updateCurrent);
        });
        $WIN.on("resize load", function () {
            measureSections();
            updateCurrent();
        });
        measureSections();
        updateCurrent();

    };


    
    var ssStatCount = function () {

        var statSection = $(".s-stats"),
            stats = $(".stats__count");

        if (!statSection.length || !stats.length || typeof $.fn.waypoint !== "function") {
            return;
        }

        statSection.waypoint({

            handler: function (direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                }

                this.destroy();

            },

            offset: "90%"

        });
    };


    
    var ssSkillBarAnimation = function () {

        var aboutSection = $("#about"),
            skillBars = $(".skill-bars");

        if (!aboutSection.length || !skillBars.length || typeof $.fn.waypoint !== 'function') {
            return;
        }

        aboutSection.waypoint({

            handler: function () {
                skillBars.addClass('is-animated');

                this.destroy();
            },

            offset: "70%"

        });
    };


    
    var ssSmoothScroll = function () {

        // Stacked sticky layout uses a dedicated capture-phase handler in index.html.
        if ($('body').hasClass('is-stacked')) {
            return;
        }

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
                $target = $(target);

            if (!target || target === "#0" || !$target.length) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            var headerHeight = $(".s-header").outerHeight() || 0;

            $('html, body').stop().animate({
                'scrollTop': Math.max($target.offset().top - headerHeight, 0)
            }, cfg.scrollDuration, 'swing', function () {
                if (window.history && typeof window.history.pushState === "function") {
                    window.history.pushState(null, "", target);
                }
            });

        });
    };


    
    var ssPlaceholder = function () {
        if (typeof $.fn.placeholder !== "function") {
            return;
        }

        $('input, textarea, select').placeholder();
    };


    
    var ssAlertBoxes = function () {

        $('.alert-box').on('click', '.alert-box__close', function () {
            $(this).parent().fadeOut(500);
        });

    };


    
    var ssContactForm = function () {

        if (!$('#contactForm').length || typeof $.fn.validate !== "function") {
            return;
        }

        $('#contactForm').validate({

            
            submitHandler: function (form) {

                var sLoader = $('.submit-loader');

                $.ajax({

                    type: "POST",
                    url: "inc/sendEmail.php",
                    data: $(form).serialize(),
                    beforeSend: function () {

                        sLoader.slideDown("slow");

                    },
                    success: function (msg) {

                        if (msg == 'OK') {
                            sLoader.slideUp("slow");
                            $('.message-warning').fadeOut();
                            $('#contactForm').fadeOut();
                            $('.message-success').fadeIn();
                        }

                        else {
                            sLoader.slideUp("slow");
                            $('.message-warning').html(msg);
                            $('.message-warning').slideDown("slow");
                        }

                    },
                    error: function () {

                        sLoader.slideUp("slow");
                        $('.message-warning').html("Something went wrong. Please try again.");
                        $('.message-warning').slideDown("slow");

                    }

                });
            }

        });
    };


    
    var ssBackToTop = function () {

        var pxShow = 500,   // height on which the button will show
            fadeInTime = 400,   // how slow/fast you want the button to show
            fadeOutTime = 400,   // how slow/fast you want the button to hide
            scrollSpeed = 300,   // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
            goTopButton = $(".go-top")

        var goTopShown = null;

        $(window).on('scroll', function () {
            var show = (window.pageYOffset || 0) >= pxShow;
            if (show === goTopShown) return;
            goTopShown = show;
            goTopButton.stop(true, true);
            if (show) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };


    
    (function ssInit() {

        [ssPreloader, ssPrettyPrint, ssMoveHeader, ssMobileMenu, ssMasonryFolio, ssPhotoswipe, ssSlickSlider, ssWaypoints, ssStatCount, ssSkillBarAnimation, ssSmoothScroll, ssPlaceholder, ssAlertBoxes, ssContactForm, ssBackToTop].forEach(function (fn) {
            try {
                fn();
            } catch (error) {
                if (window.console && console.warn) {
                    console.warn(error);
                }
            }
        });

    })();


})(jQuery);