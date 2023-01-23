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

app.contact = {
    init: function () {
        $(".contact h1").blast({
            delimiter: "character",
            tag: "span",
        });
        a = 0;
        $(".contact .blast").each(function () {
            var el = $(this);
            setTimeout(function () {
                el.addClass("animated bounceIn");
            }, a);
            a = a + 100;
        });
        setTimeout(function () {
            $(".contact .blast").removeClass("animated bounceIn");
            $(".contact .blast").css("opacity", 1);
            $(".contact .blast").mouseenter(function () {
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
        b = 300;
        $(".contact li").each(function () {
            var el = $(this);
            setTimeout(function () {
                el.addClass("animated fadeInUp");
            }, b);
            b = b + 100;
        });
        initMap();
        $("#submit").click(function () {
            var inputs = new Array();
            var formInputs = $("#contact :input");
            formInputs.each(function (el) {
                inputs[formInputs[el].name] = formInputs[el];
            });

            app.contact.validate();
            if ($(".contact-form .required").size() > 0) {
                alertify.error(msg1);
            } else {
                alertify.log(msg2);
                var data = {
                    service_id: "gmail",
                    template_id: "template_k74jwaa", // keys from email.js
                    user_id: "9XorAWqz2R31Ye3-E", // keys from email.js
                    template_params: {
                        name: inputs["name"].value,
                        subject: inputs["subject"].value,
                        message: inputs["msg"].value,
                        email: inputs["email"].value,
                    },
                };

                $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
                    type: "POST",
                    data: JSON.stringify(data),
                    contentType: "application/json",
                })
                    .done(function () {
                        alertify.success(msg3);
                        $(".contact-form .required").removeClass("required");
                        $(
                            '.contact-form input[type="text"],.contact-form input[type="email"],.contact-form textarea'
                        ).val("");
                    })
                    .fail(function (error) {
                        $(".contact-form .required").removeClass("required");
                        $(
                            '.contact-form input[type="text"],.contact-form input[type="email"],.contact-form textarea'
                        ).val("");
                        alertify.error(msg4);
                    });
            }
            return false;
        });
        $(".contact-form input, .contact-form textarea").keyup(function () {
            app.contact.validate();
        });
    },
    validate: function () {
        if (
            $("input[type=email]").val() == "" ||
            !validateEmail($("input[type=email]").val())
        ) {
            $("input[type=email]").parent().addClass("required");
        } else {
            $("input[type=email]").parent().removeClass("required");
        }
        if ($("textarea").val() == "") {
            $("textarea").parent().addClass("required");
        } else {
            $("textarea").parent().removeClass("required");
        }
    },
};

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function initMap() {
    // position we will use later
    var lat = 18.6391;
    var lon = 73.7809;
    // initialize map
    map = L.map("map").setView([lat, lon], 15);
    // set map tiles source
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);
    // add marker to the map
    marker = L.marker([lat, lon]).addTo(map);
    // add popup to the marker
    marker.bindPopup("<b>Utkarsh Tambe lives here.</b><br />Can plan to meet me.<br />").openPopup();
    setTimeout(function () {
        $(".inf-map").addClass("animated fadeInUp");
        $("#map").css("opacity", 1);
    });
}

app.gallery = {
    init: function () {
        console.log('here');
        $("body").addClass("no-overflow");
        $(".magicwall").magicWall({
            maxItemHeight: 350,
            maxItemWidth: 350,
            delay: 400,
            preloadBeforeSwitch: true,
            loadingMode: "chain",
            pauseOnHover: "item",
            animations:
                "flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade",
            duration: 800,
        });
        $(".colorbox").colorbox({
            maxWidth: "70%",
            maxHeight: "250%",
            scrolling: true,
            onOpen: function () {
                $(".magicwall").magicWall("stop");
            },
            onClosed: function () {
                $(".magicwall").magicWall("start");
            },
        });
        alertify.log(msg5);
        setTimeout(function () {
            alertify.log(msg6);
        }, 2000);
    },
};