$(document).ready(function() {
    $('button:contains("Doboz eltávolítása")').click(function(){
        $("div").remove();
    })
});

$(document).ready(function() {
    $('button:contains("DIV elemek kiürítése")').click(function(){
        $("div").empty();
    })
});