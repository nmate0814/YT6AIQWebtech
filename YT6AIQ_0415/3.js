$(document).ready(function(){
    $("h2").mousemove(function(event){
        var x = event.pageX;
        var y = event.pageY;
        alert("X koordináta: " + x + ", Y koordináta: " + y);
    });

    $("#hide").click(function(){
        $(this).hide();
    });

    $("#hide2").dblclick(function(){
        $(this).hide();
    });

    $("button").mouseenter(function(){
        alert("Egeret a gomb felé húzta!");
    });

    $("input").hover(function(){
        $(this).css("border-color", "red");
    }, function(){
        $(this).css("border-color", "blue");
    });

    $("input").focus(function(){
        $(this).css("background-color", "pink");
    });
});
