function show_tooltip() {
    var tooltip = $("header a.tooltip");
    var tempT;
    tooltip.hover(function (e) {
            tempT = this.title;
            tooltip.title = "";
            $("body").append("<p id='tooltip'>" + tempT + "</p>");
            $("#tooltip")
                .css("top", (e.pageY - 15) + "px")
                .css("left", (e.pageX + 60) + "px")
                .fadeIn("fast");
        },
        function () {
            tooltip.title = tempT;
            $("#tooltip").remove();
        });
    tooltip.mousemove(function (e) {
        $("#tooltip")
            .css("top", (e.pageY - 15) + "px")
            .css("left", (e.pageX + 60) + "px");
    });
}

// starting the script on page load
$(document).ready(function () {
    show_tooltip();
});
