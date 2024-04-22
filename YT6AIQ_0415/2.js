$(document).ready(function(){
    $("#K1").click(function(){
        $("ul li:nth-child(-n+2), #link1").hide();
    });
    
    $("#K2").click(function(){
        $("ul li:nth-child(-n+2), #link1, #button2").hide();
    });

    $("#K3").click(function(){
        $("head, ul li:nth-child(-n+2), #link1").hide();
    });

    $("#K4").click(function(){
        $("ul li:nth-child(-n+2), #link1").hide();
        $("#link1").text("");
    });

    $("#K5").click(function(){
        $("ul li:nth-child(-n+2), #link1").hide();
        $("table tr:nth-child(even)").hide();
    });
});
