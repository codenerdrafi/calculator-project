function delteMe(){
    document.getElementById("myResult").value = "";
}
function calculator(newValue){
    document.getElementById("myResult").value += newValue;
}
function answer(){
    const valueHolder = document.getElementById("myResult").value;
    const doEval = eval(valueHolder);
    document.getElementById("myResult").value = doEval;
    
}