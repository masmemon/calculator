function getNum(num){
    //console.log(num)
    var inputResult = document.getElementById("inputresult");
    inputResult.value += num;
}

function clearField(){
    var inputResult = document.getElementById("inputresult");
    inputResult.value = "";
}

function getResult(){
    var inputResult = document.getElementById("inputresult");
    inputResult.value =  eval(inputResult.value);

}