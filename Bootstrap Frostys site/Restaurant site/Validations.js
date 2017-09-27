
   
   function validateName() {

        var firstName = document.forms ["contactInfo"]["firstName"].value;
        var lastName = document.forms ["contactInfo"]["lastName"].value;
  
       if (firstName === "") {

      
       alert("First Name must be filled in.");
      
       return false;}
       if (lastName === "") {
        
              
               alert("Last Name must be filled in.");
              
               return false;
   }}