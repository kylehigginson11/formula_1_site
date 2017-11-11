// Wait for document to load all content
$(document).ready(function () {

    /*
     Use AJAX to make a get request to f1 server to get the driver standings.
     For each driver in the standings, append a row to the table of the position,
     driver name and their points value.
     */
    $.get("https://ergast.com/api/f1/2017/driverStandings.json", function (data, status) {
        var driver_arr = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
        $.each(driver_arr, function (index, value) {
            $('#driverTable > tbody:last-child').append("<tr><td>" + value["position"] + "</td><td>" + value["Driver"]["givenName"] + " " + value["Driver"]["familyName"] + "</td><td>" + value["points"] + "</td></tr>");
        });
    });

    /*
     Another AJAX request for the second table, here we make another get request,
     this time for the constructors standings and append a row to the table for each
     constructor in the JSON response.
     */

    $.get("https://ergast.com/api/f1/2017/constructorStandings.json", function (data, status) {
        var constructor_array = data['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings'];
        $.each(constructor_array, function (index, value) {
            $('#constructorTable > tbody:last-child').append("<tr><td>" + value["position"] + "</td><td>" + value["Constructor"]["name"] + "</td><td>" + value["points"] + "</td></tr>");
        });
    });

    /*
     This is making a get request to the local json file saved on this server. For every entry in the JSON,
     we append a new div, set the id of the div to the key in the dictionary. We then append a servies of headings
     to the div from the returned values.
     */
    $.getJSON("teams.json", function (data) {
        $.each(data, function (index, value) {
            $('#teamStats').append('<article id="' + value["Key"] + '"' + ' class="subcontent team-article">' +
                '<h3>' + value["Name"] + '</h3>'
                + '<h4>Nationality: ' + value["Nationality"] + '</h4>'
                + '<h4>Team Chief: ' + value["Chief"] + '</h4>'
                + '<p>' + value["Profile"] + '</p>'
                + '<h1>Drivers</h1>'
                + '</article>');
            $.each(value["Drivers"], function (i, v) {
                $('#' + value["Key"]).append('<div class="driver-div">'
                    + '<h1>' + v["Name"] + '</h1>'
                    + '<h3>' + v["Nationality"] + '</h3>'
                    + '<h3>Career Wins: ' + v["Wins"] + '</h3>'
                    + '<h3>Career Podiums: ' + v["Podiums"] + '</h3>'
                    + '</div>');
            })
        });
        // This line shows the first div with subcontent class and adds the active class to the div.
        $(".subcontent:first").show().addClass('active');
    });

    // load the previous_race_stats.json content to the #stats list
    $.getJSON("previous_race_stats.json", function (data) {
        $.each(data['stats'], function (key, value) {
            $('#stats').append('<li>' + key + ": " + value + '</li>');
        });
    });
});