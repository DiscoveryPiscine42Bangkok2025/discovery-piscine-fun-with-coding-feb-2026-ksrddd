const left = document.getElementById("left");
const right = document.getElementById("right");
const op = document.getElementById("op");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const a = Number(left.value);
    const b = Number(right.value);

    if (
        !Number.isInteger(a) ||
        !Number.isInteger(b) ||
        a < 0 || b < 0
    ) {
        alert("Error :(");
        return;
    }

    if ((op.value === "/" || op.value === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (op.value) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "%": result = a % b; break;
    }

    alert(result);
    console.log(result);
});

setInterval(() => {
    alert("Please, use me...");
}, 30000);
