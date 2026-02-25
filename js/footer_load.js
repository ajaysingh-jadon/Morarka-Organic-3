// $(document).ready(function () {
//     fetch("/footer.html")
//         .then(res => res.text())
//         .then(html => {
//             $("#site-footer").html(html);

//             if (typeof WOW === "function") {
//                 new WOW().init();
//             }
//         });
// });

$(document).ready(function () {
  fetch("/footer.html")
    .then((res) => res.text())
    .then((html) => {
      $("#site-footer").html(html);

      // ✅ Re-init footer accordion AFTER html is injected
      initFooterAccordion();

      if (typeof WOW === "function") {
        new WOW().init();
      }
    });
});

function initFooterAccordion() {
  // Remove any existing listeners to avoid duplicates
  $(document).off("click", ".footer-title-mobile");

  $(document).on("click", ".footer-title-mobile", function () {
    const $parent = $(this).closest(".footer-col-block");
    const $content = $(this).next();

    $parent.toggleClass("open");

    if ($parent.hasClass("open")) {
      $content.stop(true, true).slideDown(250);
    } else {
      $content.stop(true, true).slideUp(250);
    }
  });
}
