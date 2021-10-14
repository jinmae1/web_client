// Selector 1
$(document).ready(function () {
    $("h1:eq(1)").css("color", "red");
    $("#text").css("color", "orange");
    $("[name=text]").css("color", "gold");
    $(".text").css("color", "forestgreen");
});

// Selector 2
$(document).ready(function () {
    $("li").first().css("color", "red");
    $("ol li.second").css("color", "orange");
    $("ol li:last").css("color", "gold");

    $("li:eq(3)").css("color", "forestgreen");
    $("li.second").eq(1).css("color", "blue");
    $("ul li.third").last().css("color", "purple");
});

// Selector 3
function clear() {
    $("table td").removeAttr("style color");
}
function click1() {
    $("table tr:eq(1) :not(td:first)").css("color", "orange");
}
function click2() {
    $("table tr:eq(2) :not(td:first)").css("color", "orange");
}
function click3() {
    $("table td:nth-child(2)").not(":last").css("color", "orange");
}
function click4() {
    $("table td:nth-child(3)").not(":last").css("color", "orange");
}
