var x=10;
var z=20;
function Global_Function() {
    document.getElementById("Global").innerHTML = x+20;
}
function Local_Function() {
    var y = 20;
    document.getElementById("Local").innerHTML = y*10;
}
function Error_Function() {
    document.getElementById("Error").innerHTML = y+4;
    console.log(y+4);
}
function If_Function() {
    if (new Date().getHours() > 8) {
        document.getElementById("IfFunction").innerHTML = "Hope your day is going well so far!";
    }
}
function If_Statement() {
    if (z>=x) {
        document.getElementById("IfState").innerHTML = "z>=x";
    }
}
function Doughnut_Function() {
    Doughnuts = document.getElementById("Doughnuts").value;
        if (Doughnuts >= 13) {
        Boxes = "You need more than 1 box of doughnuts";
    }
    else {
        Boxes = "You can get 1 box of doughnuts";
    }
    document.getElementById("How_Many_Doughnuts").innerHTML = Boxes;
}
function Time_function() {
var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
    
}