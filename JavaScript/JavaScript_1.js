function Flower_Function() {
    var Flower_Output;
    var Flowers = document.getElementById("Flower_Input").value;
    var Flower_String = " are great flowers."
    switch(Flowers) {
        case "Peonies":
            Flower_Output = "Peonies" + Flower_String;
        break;
        case "Dandelions":
            Flower_Output = "Dandelions" + Flower_String;
        break;
        case "Roses":
            Flower_Output = "Roses" + Flower_String;
        break;
        case "Chrysanthamums":
            Flower_Output = "Chrysanthamums" + Flower_String;
        default:
        Flower_Output = "Please select a flower from the list above.";
    }
    document.getElementById("Output").innerHTML = Flower_Output;
}
function ClassNameF(){
    var A = document.getElementsByClassName("Dogs");
    A[1].innerHTML= "We love Cats too!";
}
//canvas circle
var c=document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
//canvas gradient
var canvas=document.getElementById("Gradient_ID");
var context=canvas.getContext("2d");
var grd = context.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
context.fillStyle = grd;
context.fillRect(20,20,150,100);
