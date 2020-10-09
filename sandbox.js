window.onload = function(){

    // Referencing HTML tags
    var form = document.querySelector("form");
    var display = form.querySelector("input");

    // Functions

    // Inserting numbers in the input
    function ins(num){
        display.value += num;
    }
    
    // Inserting arithmetic operators in the input; if value of input is not equal to an empty string, add an operator
    function opt(a){
        if(display.value !== ""){
            display.value += a;
        }
    }
    
    // Inserting 0 in the input if value of input is not equal to an empty string; meaning it won't add 0 as the first number, e.g. 01, but rather as 10
    function zero(){
        if(display.value != ""){
            display.value += "0";
        }
    }


}