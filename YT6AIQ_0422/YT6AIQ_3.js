$(document).ready(function() {
    $('button:contains("Szöveg hozzáadása")').click(function() {
        $('div').append("Programtervező informatikus!");
    });

    $('button:contains("Gomb")').click(function() {
        $('div').append("<button>PTI Gomb</button>");
    });

    $('button:contains("Új Gomb felvétele")').click(function() {
        $('a').after("<br><button>ME GEIK-PTI</button>");
    });

    $('button:contains("Fejléc felvétele")').click(function() {
        $('body').prepend("<h1>jQuery feladat</h1>");
    });

    $('button:contains("Alcím felvétele")').click(function() {
        $('body').append("<h2>HTML metódusok</h2>");
    });

    $('button:contains("Űrlap fejléc felvétele")').click(function() {
        $('input:first').before("<h3>ŰRLAP-YT6AIQ</h3>");
    });
});
