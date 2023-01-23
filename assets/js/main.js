app.home = {
    init: function () {
        TweenMax.to(document.querySelector(".bg"), 0.4, {
            opacity: 1,
            ease: Power2.easeIn,
        });
        var mySVG = $("svg").drawsvg({
            duration: 10000,
        });
        mySVG.drawsvg("animate");
        TweenMax.fromTo(
            $(".jb")[0],
            4,
            {
                opacity: 0,
                ease: Power2.easeIn,
            },
            {
                opacity: 1,
                delay: 3,
            }
        );
        $("#nav_bar nav a").removeClass("active");
        $(".home-link").addClass("active");
        $(".home-page h1").blast({
            delimiter: "character",
            tag: "span",
        });
        a = 0;
        b = 0;
        $(".home-page .blast").each(function () {
            if (a == 300) {
                a = 400;
            }
            if (a == 1100) {
                a = 1200;
            }
            var el = $(this);
            if (a == 400) {
                setTimeout(function () {
                    $(".home-page h1 img").addClass("animation-logo");
                }, 800);
            }
            setTimeout(function () {
                el.addClass("animated bounceIn");
            }, a);
            if (a < 1200) {
                a = a + 100;
            } else {
                a = a + 80;
            }
        });
        setTimeout(function () {
            $(".home-page .blast").removeClass("animated bounceIn");
            $(".home-page .blast").css("opacity", 1);
            $(".home-page .blast").mouseenter(function () {
                var el = $(this);
                $(this).addClass("animated rubberBand");
                $(this).one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        el.removeClass("animated rubberBand");
                    }
                );
            });
        }, 3000);
        $(".home-page .flat-button").mouseenter(function () {
            var el = $(this);
            $(this).addClass("animated rubberBand");
            $(this).one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    el.removeClass("animated rubberBand");
                }
            );
        });
    },
};

app.about = {
    init: function () {
        $(".about h1").blast({
            delimiter: "character",
            tag: "span",
        });
        a = 0;
        $(".about h1 .blast").each(function () {
            var el = $(this);
            setTimeout(function () {
                el.addClass("animated bounceIn");
            }, a);
            a = a + 100;
        });
        setTimeout(function () {
            $(".about .blast").removeClass("animated bounceIn");
            $(".about .blast").css("opacity", 1);
            $(".about .blast").mouseenter(function () {
                var el = $(this);
                $(this).addClass("animated rubberBand");
                $(this).one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        el.removeClass("animated rubberBand");
                    }
                );
            });
        }, 1000);
    },
};

app.tips = {
    init: function () {
        $(".tips h1").blast({
            delimiter: "character",
            tag: "span",
        });
        a = 0;
        $(".tips h1 .blast").each(function () {
            var el = $(this);
            setTimeout(function () {
                el.addClass("animated bounceIn");
            }, a);
            a = a + 100;
        });
        setTimeout(function () {
            $(".tips .blast").removeClass("animated bounceIn");
            $(".tips .blast").css("opacity", 1);
            $(".tips .blast").mouseenter(function () {
                var el = $(this);
                $(this).addClass("animated rubberBand");
                $(this).one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        el.removeClass("animated rubberBand");
                    }
                );
            });
        }, 1000);
    },
};

app.tipsLogo = {
    init: function () {
        (function () {
            $.ajax({
                'async': false,
                'global': false,
                'url': './data.json',
                'dataType': "json",
                'success': function (data) {
                    data.posts.forEach(function (post) {
                        var container = document.getElementById('tips-post-container');
                        var innerDiv = document.createElement('div');
                        innerDiv.setAttribute('class', 'inner-div-container');
                        var par = document.createElement('p');
                        par.setAttribute('class', 'tips-text');
                        par.textContent = post.description;

                        innerDiv.appendChild(par);

                        var link = document.createElement('a');
                        link.setAttribute('target', '_blank');
                        link.setAttribute('href', post.url);

                        var img = document.createElement('img');
                        img.setAttribute('class', 'tips-image');
                        img.setAttribute('src', post.src);
                        link.appendChild(img);
                        innerDiv.appendChild(link);
                        container.appendChild(innerDiv);
                    });
                }
            });
        })();
        new SimpleBar(document.getElementById('tips-post-container'));
    },
};

