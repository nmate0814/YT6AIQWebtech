$(document).ready(function(){
    $("#text").click(function(){
    alert('HTML kód...')
    })
});

$(document).ready(function(){
    $("#html").click(function(){
    alert('<div>ME GEIK - PTI</div>')
    })
});

$(document).ready(function(){
    $("#value").click(function(){
        var name = $("#nameInput").val();
        alert("Név: " + name);
    });

    $("#submit").click(function(){
        alert("Jelentkezés");
    });

    $("#parameter").click(function(){
        var link = $("a").attr("href");
        alert("Paraméter értéke: " + link);
    });
});