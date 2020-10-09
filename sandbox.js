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

    // Using this functions to evaluate the value in the input; if an error, alerting the error
    var equal = function() {
        let b = display.value;
        if(b){
            try{
                display.value = eval(b);
            }
            catch{
                alert("Error");
            }
        }
    }
    
    // Clearing the form after clicking on C button
    function clean(){
        display.value = "";
    }

}