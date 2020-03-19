function Concat_Function() {
    var Part1 = "This is part 1";
    var Part2 = ", This is part 2";
    var Part3 = ", This is part 3";
    var All_Parts = Part1.concat(Part2, Part3);
    document.getElementById("ConcatExample").innerHTML = All_Parts;
}
function Slice_Function() {
    var sentence = "Hello, World! My name is Stephanie";
    var section = sentence.slice(0,5);
    document.getElementById("Slice").innerHTML = section;
}
function ToUppercase_Function() {
    var str = "Hello, I am in all Upercase Now.";
    var res = str.toUpperCase();
    document.getElementById("Uppercase").innerHTML = res;
}
function StringSearch() {
    var str = "My name is Stephanie."
    var n = str.search("Stephanie");
    document.getElementById("SSearch").innerHTML = n;
}
function string_Method() {
    var x = 250;
    document.getElementById("StringExample").innerHTML = x.toString();
}
function Precision_Method() {
    var w = 250.9678
    document.getElementById("PrecisionM").innerHTML = w.toPrecision(4);
}
function Fixed_Method() {
    var w = 250.9678
    document.getElementById("FixedM").innerHTML = w.toFixed(4);
}
function Value_Method() {
    var str = "Hi, I am a string.";
    var res = str.valueOf();
    document.getElementById("ValueM").innerHTML = res;
}