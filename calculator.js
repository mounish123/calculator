const display = document.getElementById("display");

function addToDisplay(value){
    display.value += value;
}

function compute(){
    try{
        display.value= eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value="";

}