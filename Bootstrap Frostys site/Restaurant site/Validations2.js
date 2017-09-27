function validateName() {
    var x = document.forms["contactInfo"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}