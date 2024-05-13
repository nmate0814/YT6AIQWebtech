$(document).ready(function() {
    $('button:contains("Adatok betöltése")').click(function(){
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
           $('div').append('<hr>')
           $('div').append('<p><b>Kurzusnév: </b>'+ data.kurzusnev[1].course +'</p>');   
           $('div').append('<p><b>Oktató: </b>'+ data.oktato[1].teacher +'</p>');
           $('div').append('<p><b>Szak: </b>'+ data.szak[1].szaka +'</p>');
           $('div').append('<p><b>Időpont: </b><br> &nbsp;Nap: '+ data.idopont[1].nap + '<br> &nbsp;Tól: '+ data.idopont[1].tol + ' ' + '<br> &nbsp;Ig: ' + data.idopont[1].ig + '</p>');            
           $('div').append('<p><b>Helyszín: </b>'+ data.helyszin[1].room +'</p>');
           $('div').append('<hr>')
           $('div').append('<p><b>Kurzusnév: </b>'+ data.kurzusnev[2].course +'</p>');   
           $('div').append('<p><b>Oktató: </b>'+ data.oktato[2].teacher +'</p>');
           $('div').append('<p><b>Szak: </b>'+ data.szak[2].szaka +'</p>');
           $('div').append('<p><b>Időpont: </b><br> &nbsp;Nap: '+ data.idopont[2].nap + '<br> &nbsp;Tól: '+ data.idopont[2].tol + ' ' + '<br> &nbsp;Ig: ' + data.idopont[2].ig + '</p>');            
           $('div').append('<p><b>Helyszín: </b>'+ data.helyszin[2].room +'</p>');
           $('div').append('<hr>')
           $('div').append('<p><b>Kurzusnév: </b>'+ data.kurzusnev[3].course +'</p>');   
           $('div').append('<p><b>Oktató: </b>'+ data.oktato[3].teacher +'</p>');
           $('div').append('<p><b>Szak: </b>'+ data.szak[3].szaka +'</p>');
           $('div').append('<p><b>Időpont: </b><br> &nbsp;Nap: '+ data.idopont[3].nap + '<br> &nbsp;Tól: '+ data.idopont[3].tol + ' ' + '<br> &nbsp;Ig: ' + data.idopont[3].ig + '</p>');            
           $('div').append('<p><b>Helyszín: </b>'+ data.helyszin[3].room +'</p>');
           $('div').append('<hr>')
           $('div').append('<p><b>Kurzusnév: </b>'+ data.kurzusnev[4].course +'</p>');   
           $('div').append('<p><b>Oktató: </b>'+ data.oktato[4].teacher +'</p>');
           $('div').append('<p><b>Szak: </b>'+ data.szak[4].szaka +'</p>');
           $('div').append('<p><b>Időpont: </b><br> &nbsp;Nap: '+ data.idopont[4].nap + '<br> &nbsp;Tól: '+ data.idopont[4].tol + ' ' + '<br> &nbsp;Ig: ' + data.idopont[4].ig + '</p>');            
           $('div').append('<p><b>Helyszín: </b>'+ data.helyszin[4].room +'</p>');
           $('div').append('<hr>')
           $('div').append('<p><b>Kurzusnév: </b>'+ data.kurzusnev[5].course +'</p>');   
           $('div').append('<p><b>Oktató: </b>'+ data.oktato[5].teacher +'</p>');
           $('div').append('<p><b>Szak: </b>'+ data.szak[5].szaka +'</p>');
           $('div').append('<p><b>Időpont: </b><br> &nbsp;Nap: '+ data.idopont[5].nap + '<br> &nbsp;Tól: '+ data.idopont[5].tol + ' ' + '<br> &nbsp;Ig: ' + data.idopont[5].ig + '</p>');            
           $('div').append('<p><b>Helyszín: </b>'+ data.helyszin[5].room +'</p>');
           $('div').append('<hr>')
           $('div').append('<p><b>Kurzusnév: </b>'+ data.kurzusnev[6].course +'</p>');   
           $('div').append('<p><b>Oktató: </b>'+ data.oktato[6].teacher +'</p>');
           $('div').append('<p><b>Szak: </b>'+ data.szak[6].szaka +'</p>');
           $('div').append('<p><b>Időpont: </b><br> &nbsp;Nap: '+ data.idopont[6].nap + '<br> &nbsp;Tól: '+ data.idopont[6].tol + ' ' + '<br> &nbsp;Ig: ' + data.idopont[6].ig + '</p>');            
           $('div').append('<p><b>Helyszín: </b>'+ data.helyszin[6].room +'</p>');
           $('div').append('<hr>')
         })
       })   
});  