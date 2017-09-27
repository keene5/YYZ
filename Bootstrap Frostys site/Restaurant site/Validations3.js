 function validateName3() {
            var x = document.forms["contactInfo"]["fname"].value;
            if (x === "") {
                alert("Name must be filled out");
                return false;
            }