$(document).ready(function () {
    const $left = $("#left");
    const $right = $("#right");
    const $op = $("#op");
    const $btn = $("#btn");

    $btn.click(function () {
        const a = Number($left.val());
        const b = Number($right.val());

        if (
            !Number.isInteger(a) ||
            !Number.isInteger(b) ||
            a < 0 || b < 0
        ) {
            alert("Error :(");
            return;
        }

        if (($op.val() === "/" || $op.val() === "%") && b === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;
        switch ($op.val()) {
            case "+": result = a + b; break;
            case "-": result = a - b; break;
            case "*": result = a * b; break;
            case "/": result = a / b; break;
            case "%": result = a % b; break;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});
