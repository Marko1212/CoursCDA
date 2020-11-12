let moves = 0;
var seconds = 0;
var timer;

$('.secondes').text("0");
$('.moves').text("0");

$("button").attr("disabled", "disabled");


function jouer() {

    $('input').val("Rejouer");
    $("button").attr("disabled", false);

    if (timer) timer.stop();
    if (moves) moves = 0;
    if (seconds) seconds = 0;


    $('.secondes').text("0");
    $('.moves').text("0");

    let array = [""];

    for (let i = 1; i <= 15; i++) {
        array.push(i);
    }

    console.log(array);

    for (let k = array.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * k);
        const temp = array[k];
        array[k] = array[j];
        array[j] = temp;
    }

    console.log(array);

        //var imageUrl = "images/sky.jpg";
        //$(".box").css("background-image", "url(" + imageUrl + ")");

    for (let l = 0; l < array.length; l++) {

        $("#" + (l + 1)).text(array[l]);
        if (array[l] === "") {
            console.log("I am here! empty square");
            $("#" + (l + 1)).css('background-image', 'url(' + 'img/image_part_16.jpg' +')');
        } else {
            console.log("I am here! not empty square");
            $("#" + (l + 1)).css({
                'background-image': 'url(' + 'img/image_part_' + array[l] + '.jpg' + ')'
            });
        }
    }

}

// a reusable timer component
// pass in a timeout interval in ms, after which callback is called
// callback gets passed one argument, the elapsed time is ms
var Timer = function (interval, callback) {
    var startTime;
    var startPauseTime;
    var totalPause = 0;
    var timeout;

    var run = function () {
        update(new Date().getTime());
        timeout = setTimeout(run, interval);
    };

    var update = function (now) {
        callback(now - totalPause - startTime);
    };

    // start the timer
    this.start = function () {
        if (startTime) return false;
        startTime = new Date().getTime();
        run();
    };

    // stop the timer
    this.stop = function () {
        if (!startTime) return false;
        clearTimeout(timeout);
        var now = new Date().getTime();
        if (startPauseTime) totalPause += now - startPauseTime;
        update(now);
        startTime = startPauseTime = undefined;
        totalPause = 0;
    };

    // pause the timer
    this.pause = function () {
        if (!startTime || startPauseTime) return false;
        clearTimeout(timeout);
        startPauseTime = new Date().getTime();
    };

    // resume the timer
    this.resume = function () {
        if (!startPauseTime) return false;
        totalPause += new Date().getTime() - startPauseTime;
        startPauseTime = undefined;
        run();
    };
};

$(document).ready(function () {

    // Algorhithm : how to shuffle values + javascript code 
    // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb


    var upval, downval, leftval, rightval, txt, bVal, bkgImage;

    $("button").click(function () {

        txt = $(this).text();
        //console.log(txt);
        bVal = $(this).val();
        //console.log(bVal);
        bkgImage = $(this).css('background-image');


        if (txt != "") {
            if ((bVal != 1) && (bVal != 2) && (bVal != 3) && (bVal != 4)) {
                upval = parseInt(bVal) - 4;
                var upTxt = $("#" + upval).text();
                if (upTxt == "") {
                    $("#" + upval).text(txt);
                    $("#" + upval).css('background-image', bkgImage);
                    $(this).text("");
                    $(this).css('background-image', 'url(' + 'img/image_part_16.jpg' +')');
                    $('.moves').text(++moves);
                    //on démarre le chrono au 1er mouvement
                    if (moves === 1) {
                        console.log("1er mouvement ici");
                        timer = new Timer(333, function (ms) {
                            seconds = Math.floor(ms / 1000);
                            $('.secondes').text(seconds);
                        });

                        timer.start();
                    }
                }
            }
            if ((bVal != 13) && (bVal != 14) && (bVal != 15) && (bVal != 16)) {
                downval = parseInt(bVal) + 4;
                //console.log(downval);
                var downTxt = $("#" + downval).text();
                if (downTxt == "") {
                    $("#" + downval).text(txt);
                    $("#" + downval).css('background-image', bkgImage);
                    $(this).text("");
                    $(this).css('background-image', 'url(' + 'img/image_part_16.jpg' +')');
                    $('.moves').text(++moves);
                    //on démarre le chrono au 1er mouvement
                    if (moves === 1) {
                        console.log("1er mouvement ici");
                        timer = new Timer(333, function (ms) {
                            seconds = Math.floor(ms / 1000);
                            $('.secondes').text(seconds);
                        });

                        timer.start();
                    }
                }
            }
            if ((bVal != 1) && (bVal != 5) && (bVal != 9) && (bVal != 13)) {
                leftval = parseInt(bVal) - 1;
                var leftTxt = $("#" + leftval).text();
                if (leftTxt == "") {
                    $("#" + leftval).text(txt);
                    $("#" + leftval).css('background-image', bkgImage);
                    $(this).text("");
                    $(this).css('background-image', 'url(' + 'img/image_part_16.jpg' +')');
                    $('.moves').text(++moves);
                    //on démarre le chrono au 1er mouvement
                    if (moves === 1) {
                        console.log("1er mouvement ici");
                        timer = new Timer(333, function (ms) {
                            seconds = Math.floor(ms / 1000);
                            $('.secondes').text(seconds);
                        });

                        timer.start();
                    }
                }
            }
            if ((bVal != 4) && (bVal != 8) && (bVal != 12) && (bVal != 16)) {
                rightval = parseInt(bVal) + 1;
                var rightTxt = $("#" + rightval).text();
                if (rightTxt == "") {
                    $("#" + rightval).text(txt);
                    $("#" + rightval).css('background-image', bkgImage);
                    $(this).text("");
                    $(this).css('background-image', 'url(' + 'img/image_part_16.jpg' +')');
                    $('.moves').text(++moves);
                    //on démarre le chrono au 1er mouvement
                    if (moves === 1) {
                        console.log("1er mouvement ici");
                        timer = new Timer(333, function (ms) {
                            seconds = Math.floor(ms / 1000);
                            $('.secondes').text(seconds);
                        });

                        timer.start();
                    }
                }
            }
            var one = $("#1").text();
            var two = $("#2").text();
            var three = $("#3").text();
            var four = $("#4").text();
            var five = $("#5").text();
            var six = $("#6").text();
            var seven = $("#7").text();
            var eight = $("#8").text();
            var nine = $("#9").text();
            var ten = $("#10").text();
            var eleven = $("#11").text();
            var twelve = $("#12").text();
            var thirteen = $("#13").text();
            var fourteen = $("#14").text();
            var fifteen = $("#15").text();
            var sixteen = $("#16").text();

            if ((one == "1") && (two == "2") && (three == "3") && (four == "4") && (five == "5") && (six == "6") && (seven == "7") && (eight == "8") && (nine == "9") && (ten == "10") && (eleven == "11") && (twelve == "12") && (thirteen == "13") && (fourteen == "14") && (fifteen == "15") && (sixteen == "")) {
                //on arrête le chrono
                timer.stop();
                //alert("Félicitations tu as gagné au jeu!...");
                var p = $('<p></p>');
                p.text('Félicitations, tu as gagné!');
                $('.message').append(p);

                $("button").attr("disabled", "disabled");
            }
        }
    });

});