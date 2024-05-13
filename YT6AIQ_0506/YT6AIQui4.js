$(document).ready(function() {
    $('button:contains("Adatok betöltése")').click(function(){
        $('div').draggable();
        $.getJSON('YT6AIQ_orarend.json', function(data){
           $('div').html('<h2>MISKOLCI EGYETEM</h2>');
           $('div').append('<b>Cím:</b> ' +data.cim[0].code + ' ' + data.cim[0].city + ' ' + data.cim[0].street +'</p>');
           $('div').append('<b>Telefonszámok:</b><br><ul><li>' + data.phone_number[0].type + ' ' + data.phone_number[0].number + '</li> <li>' + data.phone_number[1].type + ' ' + data.phone_number[1].number +'</li></ul></p>');
           $('div').append('<h2>NM Órarend 2024 Tavasz - részlet</h2>');    
           $('div').append('<p><b>Kurzusnév: </b>'+ data.kurzusnev[0].course +'</p>');   
           $('div').append('<p><b>Oktató: </b>'+ data.oktato[0].teacher +'</p>');
           $('div').append('<p><b>Szak: </b>'+ data.szak[0].szaka +'</p>');
           $('div').append('<p><b>Időpont: </b><br> &nbsp;Nap: '+ data.idopont[0].nap + '<br> &nbsp;Tól: '+ data.idopont[1].tol + ' ' + '<br> &nbsp;Ig: ' + data.idopont[1].ig + '</p>');            
           $('div').append('<p><b>Helyszín: </b>'+ data.helyszin[0].room +'</p>');
           $('div').append('<hr>');           
       })
       })   
}); 

$(document).ready(function(){
    $('button:contains("-")').click(function(){
    $("#hide").hide();
    });
});

$(document).ready(function() {
    var availableTags = [
        "JavaScript",
        "HTML",
        "CSS",
        "jQuery",
        "AJAX"
    ];
    $("#search").autocomplete({
        source: availableTags
    })});