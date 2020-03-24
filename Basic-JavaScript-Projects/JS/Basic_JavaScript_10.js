function Call_Loop() {
    var Digit="";
    var x=1;
    while (x<11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
var str ="Hello";
var n = str.length;
document.write("There are " + n + " letters in the word hello.");
//For loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content ="";
var y;
function for_Loop() {
    for (y=0; y<Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function array_Function() {
    var DogArray = [];
    DogArray[0] = "Jackson";
    DogArray[1] = "Tobias";
    DogArray[2] = "Charlie";
    DogArray[3] = "Zues";
    document.getElementById("Array").innerHTML = DogArray[1] + " is a Lhasa Apso dog.";
    }
function constant_function() {
    const Y = 16;
    const X = "I am a string";
    document.getElementById("Constant").innerHTML= X;
}
function let_function(){
    var X = 90;
    document.getElementById("VarX").innerHTML=X;
    {
        let X=102;
        document.getElementById("LetX").innerHTML=X;
    }
}
function return_funct() {
    var x = myFunction(4, 3); 

function myFunction(a, b) {
      return a * b;   
    }  
document.getElementById("returnf").innerHTML = x;
}
function employee_function() { 
    let employee = {
    name: "Sharon",
    position: "Receptionist",
    experience: " 2 years",
    job: "pick up phone calls",
    description : function() {
        return "Our Employee, " + this.name + " is a " + this.position + 
        ". She has worked here for " + this.experience + ". Her job is to " 
        + this.job + "."
    }
}
    document.getElementById("Employee_Object").innerHTML = employee.description();
}
function break_function() {
    var text="";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) {break;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("breakf").innerHTML = text;
}
//this continues the full loop
function continue_function() {
    var text="";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) {continue;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continuef").innerHTML = text;
}