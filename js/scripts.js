        /* Change right-nav to right-nav.responsive*/
        function dropdownMenu() {
            var x = document.getElementById("dropDownClicked");
            var element = document.getElementById("trigram")
            if (x.className === "right-nav") {
                x.className += " responsive";
                element.innerHTML = "&#10799;"
            } else {
                x.className = "right-nav";
                element.innerHTML = "&#9776;"
            }
        }

        $(function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop(); // how many pixels you've scrolled
                var ap_os = $('#AboutPoint').offset().top; // pixels to the top of div1
                var ap_ht = $('#AboutPoint').height(); // height of div1 in pixels

                var pp_os = $('#ProjectPoint').offset().top; // pixels to the top of div1
                var pp_ht = $('#ProjectPoint').height(); // height of div1 in pixels

                var cp_os = $('#ContactPoint').offset().top; // pixels to the top of div1
                var cp_ht = $('#ContactPoint').height(); // height of div1 in pixels
                // if you've scrolled further than the top of div1 plus it's height
                // change the color. either by adding a class or setting a css property
                if (scroll < ap_os - 50) {
                    $('#Home').addClass('Change');
                } else {
                    $('#Home').removeClass('Change');
                }
                if (scroll >= ap_os - 50 && scroll < pp_os - 50) {
                    $('#About').addClass('Change');
                } else {
                    $('#About').removeClass('Change');
                }

                if (scroll >= pp_os - 50 && scroll < cp_os - 50) {
                    $('#Projects').addClass('Change');
                } else {
                    $('#Projects').removeClass('Change');
                }

                if (scroll >= cp_os - 50 && scroll) {
                    $('#Contact').addClass('Change');
                } else {
                    $('#Contact').removeClass('Change');
                }
            });
        });
