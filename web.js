document.addEventListener("click", function (e) {

    if (e.target.tagName == "SUMMARY") {

        document.querySelector(".active").className = "";
        e.target.parentNode.querySelector("p").className = "active";

    }

}, false);