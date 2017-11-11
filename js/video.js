// Get the native DOM video object
var video = $("#previousRace video").get(0);
$(".video-control-buttons button").click(function () {
    // Get the text value of the button
    var buttonValue = $(this).html();
    //switch statement to control buttons
    switch (buttonValue) {
        case "Mute":
            video.muted = !video.muted;
            break;
        case "Normal Speed":
            video.play();
            video.playbackRate = 1;
            break;
        case "x2 Faster":
            video.play();
            video.playbackRate = 2;
            break;
        case "x4 Faster":
            video.play();
            video.playbackRate = 4;
            break;
        case "Slow Motion":
            video.play();
            video.playbackRate = 0.5;
            break;
    }
});

$("#previousRace video").click(function () {
    if (this.paused)
        this.play();
    else
        this.pause();
});
