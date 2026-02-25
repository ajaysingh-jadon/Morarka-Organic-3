$(document).ready(function () {
    fetch("/footer.html")
        .then(res => res.text())
        .then(html => {
            $("#site-footer").html(html);

            if (typeof WOW === "function") {
                new WOW().init();
            }
        });
});         