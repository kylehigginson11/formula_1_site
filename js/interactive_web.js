// animate the arrow button when page loads, first fade it in, then bounce 4 times
$(document).ready(function () {
    var i = 0;
    var bouncer = $('.bounce');
    var title = $('header h1, h3');
    title.fadeIn(4000);
    while (i < 4) {
        bouncer.animate({top: '-=150px'});
        bouncer.animate({top: '+=150px'});
        i++;
    }
});

// auto scroll when the arrow is clicked
$(".arrow-button").click(function () {
    $('html, body').animate({
        scrollTop: $("#Standings").offset().top
    }, 2000);
});

// hide and show accordion when clicked
$(".accordion").click(function () {
    var section = $(this).next().addClass('active');
    if ($(section).css('display') === "none") {
        $(section).show();
    } else {
        $(section).hide();
    }
});

$(document).ready(function () {
    var sections = {
        "Standings": "Standings", "Teams": "Teams", "Previous Race": "previousRace", "Game": "Game",
        "All": "All", "None": "None"
    };
    $('footer').append('<h5>Select a Section to View:</h5>');
    $('footer').append('<select id="sectionSelect">Select Section to Show</select>');
    $.each(sections, function (key, value) {
        $('#sectionSelect').append('<option data-target="' + value + '">' + key + '</option>');
    });
    $('#sectionSelect').on('change', function () {
        var section = "#" + $(this).find(':selected').data('target');
        console.log(section);
        if (section === "#All") {
            $('section > div').show();
        } else if (section === "#None") {
            $('section > div').hide();
        } else {
            $('section > div').hide();
            $(section).find('> div').css("display", "block");
        }
    })
});
