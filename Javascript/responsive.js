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
