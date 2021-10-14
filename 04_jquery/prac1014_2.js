function checkBtn() {
    $("[name=check]:checked").each((_, checkedBox) =>
        console.log(checkedBox.value + "번"),
    );
}
function selectBtn() {
    console.log($("select > option:selected")[0].innerHTML);
}
