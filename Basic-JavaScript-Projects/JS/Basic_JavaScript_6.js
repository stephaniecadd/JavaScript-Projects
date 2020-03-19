function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height <52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
function Meal(Breakfast, Lunch, Dinner) {
    this.Breakfast = Breakfast;
    this.Lunch = Lunch;
    this.Dinner = Dinner;
}
var Stephanie = new Meal("Smoothie", "Sandwich", "Fish and Chips");
var Dillon = new Meal("Bacon", "Burger", "Tacos");
function Assignment() {
    document.getElementById("New_and_This").innerHTML = 
    "Stephanie has a "+ Stephanie.Breakfast + 
    " for breakfast. She likes to have a " + Stephanie.Lunch + " for lunch.";
}
function ArtPiece(Type, Year, Artist) {
    this.Art_Type = Type;
    this.Art_Year = Year;
    this.Art_Artist = Artist;
}
var MonaLisa = new ArtPiece("Renaissance", 1503, "Leonardo da Vinci");
var TheStarryNight = new ArtPiece("Post-Impressionism", 1889, "Vincent can Gogh");
var abstract = new ArtPiecce("Abstract", 1910, "Wassily Kandinsky");
function Art_Function() {
    document.getElementById("ArtKeywords").innerHTML =
    MonaLisa.Art_Type + TheStarryNight.Art_Type;
}
function count_Function () {
    document.getElementById("Nested_Function").innerHTML = Count() ;
    function Count() {
        var Starting_point = 9;
        function Plus_One() {Starting_point+=1;}
        Plus_One();
        return Starting_point;
    }
}