$(document).ready(function () {
    let size = 200;
    const colors = ["red", "green", "blue"];
    let colorIndex = 0;

    const $balloon = $("#balloon");

    function updateBalloon() {
        $balloon.css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    }

    $balloon.click(function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size > 420) {
            size = 200;
            colorIndex = 0;
        }

        updateBalloon();
    });

    $balloon.mouseleave(function () {
        size -= 5;
        if (size < 200) size = 200;

        colorIndex = (colorIndex - 1 + colors.length) % colors.length;

        updateBalloon();
    });
});
