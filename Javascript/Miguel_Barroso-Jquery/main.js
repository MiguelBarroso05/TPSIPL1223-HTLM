$(function () {
    $("#acordiao").accordion({
        heightStyle: "content",
        collapsible: true
    });
    let isColor1 = true;
    $("#changeColorButton").on("click", function () {
        if (isColor1) {
            $(".highlight").css("background-color", "azure");
        } else {
            $(".highlight").css("background-color", "lightblue");
        }
        isColor1 = !isColor1;
    });



    $("#toggleElementButton").on("click", function () {
        $("#toggleElement").toggle();
    });
});