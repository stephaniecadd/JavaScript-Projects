function MathFunction() {
    var addition = 2 + 4;
    document.getElementById("Math").innerHTML = "2 + 4 = " + addition;
}
function SubtractFunction() {
    var subtraction = 5 - 4;
    document.getElementById("Math2").innerHTML = "5 - 4 = " + subtraction;
}
function MultipyFunction() {
    var simple_Math = 5 * 4;
    document.getElementById("Math3").innerHTML = "5 * 4 = " + simple_Math;
}
function DivideFunction() {
    var simple_Math = 10 / 2;
    document.getElementById("Math4").innerHTML = "10 / 2 = " + simple_Math;
}
function MultipleOperations() {
    var simple_Math = (2+4) * 10 / 2 - 4;
    document.getElementById("Math5").innerHTML = "2 + 4 * 10 / 2 - 4 = " + simple_Math;
}
function ModulusFunction() {
    var simple_Math = 10 % 2;
    document.getElementById("Math6").innerHTML = "10 % 2 = " + simple_Math;
}
function NegationFunction() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}
function IncrementFunction() {
    var x = 10;
    x++
    document.getElementById("Math8").innerHTML = x;
}
function DecrementFunction() {
    var x = 10;
    x--
    document.getElementById("Math9").innerHTML = x;
}
function Random() {
    Math.random()*100 ;
    document.getElementById("Math10").innerHTML = Math.random()*100;
}
function HighValue() {
    Math.max(16,10,20) ;
    document.getElementById("Math11").innerHTML = Math.max(16,10,20);
}