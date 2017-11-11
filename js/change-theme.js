//hide and show the theme drop down div on hover
$(".themedropbtn").mouseover(function () {
    $("#themeDropdown").toggle();
});

// Close both dropdown if the user clicks anywhere else on window
window.onclick = function (event) {
    if (!event.target.matches('.themedropbtn')) {
        if ($('#themeDropdown').is(":visible")) {
            $('#themeDropdown').hide();
        }
    }
};

// Control each theme dropdown choice by setting css values
$('#themeDropdown a').click(function (event) {
    var theme = $(this).data("target");
    if (theme === "Mercedes") {
        $('header').css("background-image", 'url(img/mercedes_bg.jpg)');
        $('button.accordion').css("background-color", "#2aa6a9");
        $('nav.tab').css("background-color", "#2aa6a9");
        $('header').css("color", "#2aa6a9");
        $('nav.tab button').css("color", "#566f89");
    } else if (theme === "Ferrari") {
        $('header').css("background-image", 'url(img/f1_bg.jpg)');
        $('button.accordion').css("background-color", "#d0191e");
        $('nav.tab').css("background-color", "#000000");
        $('header').css("color", "#d0191e");
        $('nav.tab button.active').css("color", "#d0191e");
        $('nav.tab button').css("color", "#d0191e");
    } else if (theme === "RedBull") {
        $('header').css("background-image", 'url(img/redbull_bg.jpg)');
        $('button.accordion').css("background-color", "#011f48");
        $('nav.tab').css("background-color", "#011f48");
        $('header').css("color", "#df0c40");
        $('#Standings .standings-tab').css("color", "#df0c40");
        $('nav.tab button').css("color", "#df0c40");
    }
});