function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let parts = c.split("=");
        let k = parts[0];
        let v = parts.slice(1).join("="); // กันกรณี value มี "="
        if (k === name) return decodeURIComponent(v);
    }
    return "";
}

function saveList() {
    let items = [];
    $("#ft_list div").each(function () {
        items.push($(this).text());
    });
    setCookie("todo", JSON.stringify(items));
}

function addTodo(text) {
    const $div = $("<div></div>").text(text);

    $div.click(function () {
        if (confirm("Remove this TO DO?")) {
            $(this).remove();
            saveList();
        }
    });

    $("#ft_list").prepend($div);
    saveList();
}

$(document).ready(function () {
    $("#new").click(function () {
        let text = prompt("New TO DO:");
        if (text && text.trim() !== "") {
            addTodo(text);
        }
    });

    let data = getCookie("todo");
    if (data) {
        JSON.parse(data).forEach(function (item) {
            addTodo(item);
        });
    }
});
