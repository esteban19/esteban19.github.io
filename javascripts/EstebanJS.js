$(document).ready(function () {
    var imageName = ["/images/church.jpg", "/images/rain.jpg", "/images/nights.jpg", "/images/esteban_mcog.jpg"];
    var indexNum = 0;

    $("#picture").click(function () {
        $("#picture").fadeOut(300, function () {
            $("#picture").attr("src", imageName[indexNum]);
            indexNum++;
            if (indexNum > 3) { indexNum = 0; }
            $("#picture").fadeIn(500);
        });
    });
});