// animate the car on click of button with move-car-button class
$('.move-car-button').click(function (event) {
    var direction = $(this).text();
    var car = $('#GameCar');
    var parkingSpace = $('#parkingSpace');
    if (direction === "Right") {
        car.animate({left: '+=150px'});
    } else if (direction === "Left") {
        car.animate({left: '-=150px'});
    } else if (direction === "Up") {
        car.animate({top: '-=150px'});
    } else {
        car.animate({top: '+=150px'});
    }

    // check if car is inside space by getting co-ordinates of car and space and comparing them.
    if (car.offset().left + 150 > parkingSpace.offset().left && car.offset().top + 150 > parkingSpace.offset().top) {
        alert("Well Done!");
        $('.move-car-button').prop("disabled", true)
    }
});

// move car back to original opsition when reset button is clicked.
$('#resetButton').click(function (e) {
    $('.move-car-button').prop("disabled", false);
    var car = $('#GameCar');
    var top = $('.game-map:first').offset().top;
    var left = $('.game-map:first').offset().left;
    car.animate({left: left, top: top})
});