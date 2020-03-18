function DogDictionary() {
    var Dog = {
        Name: "Coffee",
        Breed: "Lab",
        Color: "Brown",
        Age: 7,
        Status: "Adoptable",
        Status: "Adopted"
    };
    delete Dog.Status;
    document.getElementById("Dictionary").innerHTML = Dog.Status;
}