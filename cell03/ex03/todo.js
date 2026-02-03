function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [k, v] = c.split("=");
        if (k === name) return decodeURIComponent(v);
    }
    return "";
}

function saveList() {
    let items = [];
    document.querySelectorAll("#ft_list div").forEach(div => {
        items.push(div.textContent);
    });
    setCookie("todo", JSON.stringify(items));
}

function addTodo(text) {
    let div = document.createElement("div");
    div.textContent = text;

    div.onclick = function () {
        if (confirm("Remove this TO DO?")) {
            div.remove();
            saveList();
        }
    };

    let list = document.getElementById("ft_list");
    list.prepend(div);
    saveList();
}

document.getElementById("new").onclick = function () {
    let text = prompt("New TO DO:");
    if (text && text.trim() !== "") {
        addTodo(text);
    }
};

window.onload = function () {
    let data = getCookie("todo");
    if (data) {
        JSON.parse(data).forEach(item => addTodo(item));
    }
};
