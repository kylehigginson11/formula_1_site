/*
 This controls the buttons in the navigation bar, by selecting the button in the header
 which are siblings of the tab class. Again, using the data-target value, scroll to the div with ID matching
 data-target.
 */
$("header .tab button").click(function () {
    var section = $("#" + $(this).data('target'));
    $('html, body').animate({
        scrollTop: section.offset().top
    }, 2000);
});

// On click of tablink, hide all tabs with subcontent class and show tab with id equal to data-target value
// This controls the tabs in the Teams section
$(".team-link").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".subcontent").hide();
    var team = $(this).data("target");
    $("#" + team).show();
});

// This controls the tabs in the Standings section to show and hide each table
$("#Standings nav.tab button").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#Driver, #Constructor").hide();
    var table = $(this).html();
    $("#" + table).show();
});
