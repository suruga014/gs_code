var count = {
    pc: 0,
    me: 0,
};

function rand() {
    var val = Math.floor(Math.random() * 3 + 1);
    return val;
}

//グー
var gu_btn = document.querySelector("#gu");
gu_btn.onclick = function () {
    $r = rand();
    //if=1=パー 2=グー 3=チョキ
    if ($r == 1) {
        document.querySelector("#kekka").innerHTML = "相手の勝ち";

        document.querySelector("#pc").innerHTML = "<img src=\"img/03.jpg\">";
        count["pc"]++;
    }

    if ($r == 2) {
        document.querySelector("#kekka").innerHTML = "引き分け";

        document.querySelector("#pc").innerHTML = "<img src=\"img/01.jpg\">";
    }

    if ($r == 3) {
        document.querySelector("#kekka").innerHTML = "私の勝ち";

        document.querySelector("#pc").innerHTML = "<img src=\"img/02.jpg\">";
        count["me"]++;
    }

    document.querySelector("#scoreBoard").innerHTML = "相手:" + count["pc"] + " : 私:" + count["me"];
};

// チョキ
var cho_btn = document.querySelector("#cho");
cho_btn.onclick = function () {
    $r = rand();
    if ($r == 1) {
        document.querySelector("#kekka").innerHTML = "私の勝ち";
        document.querySelector("#pc").innerHTML = "<img src=\"img/03.jpg\">";
        count["me"]++;
    }

    if ($r == 2) {
        document.querySelector("#kekka").innerHTML = "相手の勝ち";
        document.querySelector("#pc").innerHTML = "<img src=\"img/01.jpg\">";
        count["pc"]++;
    }

    if ($r == 3) {
        document.querySelector("#kekka").innerHTML = "引き分け";
        document.querySelector("#pc").innerHTML = "<img src=\"img/02.jpg\">";
    }
    document.querySelector("#scoreBoard").innerHTML = "相手:" + count["pc"] + " : 私:" + count["me"];
};

// パー
var cho_btn = document.querySelector("#par");
cho_btn.onclick = function () {
    $r = rand();
    if ($r == 1) {
        document.querySelector("#kekka").innerHTML = "引き分け";
        document.querySelector("#pc").innerHTML = "<img src=\"img/03.jpg\">";
    }

    if ($r == 2) {
        document.querySelector("#kekka").innerHTML = "私の勝ち";
        document.querySelector("#pc").innerHTML = "<img src=\"img/01.jpg\">";
        count["me"]++;
    }

    if ($r == 3) {
        document.querySelector("#kekka").innerHTML = "相手の勝ち";
        document.querySelector("#pc").innerHTML = "<img src=\"img/02.jpg\">";
        count["pc"]++;
    }
    document.querySelector("#scoreBoard").innerHTML = "相手:" + count["pc"] + " : 私:" + count["me"];
};
