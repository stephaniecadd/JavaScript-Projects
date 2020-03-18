document.write(typeof "Hello");
function NANFunction() {
    document.getElementById("NAN").innerHTML= 0/0;
}
function NANFunction1() {
    document.getElementById("NAN1").innerHTML= isNaN('String');
}
function NANFunction2() {
    document.getElementById("NAN2").innerHTML= isNaN('008');
}
function InfinityFunction() {
    document.getElementById("Infinity").innerHTML= (2E310);
}
function NInfinityFuntion() {
    document.getElementById("NInfinity").innerHTML= (-2E310);
}
function BooleanTrue(){
    document.getElementById("BTrue").innerHTML = (30>20);
}
function BooleanFalse(){
    document.getElementById("BFalse").innerHTML = (30<20);
}
function CoercionFunction(){
    document.getElementById("Coercion").innerHTML = ("Twenty" + 5);
}
function EqualTrue(){
    document.getElementById("ETrue").innerHTML = (30==30);
}
function EqualFalse(){
    document.getElementById("EFalse").innerHTML = (30==20);
}
function Equal3True(){
    x=10
    y=10
    document.getElementById("E3True").innerHTML = (x===y);
}
function Equal3False(){
    x="13"
    y=10
    document.getElementById("E3False").innerHTML = (x===y);
}
function SameValue(){
    x="10"
    y=10
    document.getElementById("SValue").innerHTML = (x===y);
}
function SameDataType(){
    x=13
    y=10
    document.getElementById("SDataType").innerHTML = (x===y);
}
function BAndTrue(){
    document.getElementById("AndTrue").innerHTML = (30 > 20 && 40 > 30);
}
function BAndFalse(){
    document.getElementById("AndFalse").innerHTML = (30 > 20 && 40 > 50);
}
function BOrTrue(){
    document.getElementById("OrTrue").innerHTML = (30 > 20 || 40 > 50);
}
function BOrFalse(){
    document.getElementById("OrFalse").innerHTML = (30 > 40 || 40 > 50);
}
function BNotTrue(){
    document.getElementById("NotTrue").innerHTML = !(40 > 50);
}
function BNotFalse(){
    document.getElementById("NotFalse").innerHTML = !(50 > 40);
}
console.log(2+4);
console.log(2>4);
