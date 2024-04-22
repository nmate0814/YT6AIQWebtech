$(document).ready(function(){
    $('#calculateBtn').click(function(){
        var numberA = parseInt($('#numberA').val());
        var numberB = parseInt($('#numberB').val());
        var operation = $('input[name="operation"]:checked').val();
        var result;
        
        if(isNaN(numberA) || isNaN(numberB)){
            alert("Kérem, adja meg mindkét számot!");
            return;
        }
        
        switch(operation){
            case 'multiply':
                result = numberA * numberB;
                break;
            case 'divide':
                if(numberB === 0){
                    alert("Nullával nem lehet osztani!");
                    return;
                }
                result = numberA / numberB;
                break;
            case 'add':
                result = numberA + numberB;
                break;
            case 'subtract':
                result = numberA - numberB;
                break;
            default:
                alert("Kérem, válasszon műveletet!");
                return;
        }
        
        $('#result').text("Eredmény: " + result);
    });
});