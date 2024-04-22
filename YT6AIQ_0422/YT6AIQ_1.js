$(document).ready(function(){
    $("#start").click(function(){
    $("div").animate({left:'300px', width:'300px'},1000);
    $("div").animate({top:'100px',height:'+=50px',fontSize:'30pt'},2000);
    $("div").animate({left:'0px', opacity:'0.4'},1000);
    $("div").animate({top:'0px', width:'150px', height:'50px', opacity:'1',
    fontSize:'12pt'},1000,function(){
        alert('Vége');
    })
})});

$(document).ready(function(){
    $("#hide").click(function(){
    $("p").hide();
    });
});

$(document).ready(function(){
    $('#close').click(function(){
        $("div").animate({top:'0px', height:'0px',fontSize:'0pt'},1000);
        $("div").animate({top:'100px', height:'150px', fontSize:'12pt'},1000);
    })
});

