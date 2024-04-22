$(document).ready(function(){
    $("button:contains('Elrejti')").click(function(){
        $("p1").hide();
    });
    
    $("button:contains('Megjeleníti')").click(function(){
        $("p").show();
    });
    
    $("button:contains('Ki/Be kapcsol_')").click(function(){
        $("p").toggle();
    });
    
    $("button:contains('áttetszőség=0.1')").click(function(){
        $("div").css("opacity", "0.1");
    });
    
    $("button:contains('áttetszőség=0.5')").click(function(){
        $("div").css("opacity", "0.5");
    });
    
    $("button:contains('áttetszőség=0.8')").click(function(){
        $("div").css("opacity", "0.8");
    });
    
    $("button:contains('Elrejt')").click(function(){
        $("div").hide();
    });
    
    $("button:contains('Megjelenít')").click(function(){
        $("div").show();
    });
    
    $("button:contains('Ki/Be kapcsol')").click(function(){
        $("div").toggle();
    });
});
