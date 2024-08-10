
function formValidation() {
    const x = [];
    x[0] = document.forms["contact-form"]["name"].value;
    x[1] = document.forms["contact-form"]["address"].value;
    x[2] = document.forms["contact-form"]["email"].value;    

    if (x[0] == "") {
      alert("Please fill your Name");
      return false;
    }
    if (x[1] == "") {
        alert("Please fill your Address");
        return false;
      }
    if (x[2] == "") {
        alert("Please fill your E-mail");
        return false;
      }
      else{
        alert("Thank you for contacting us");
      }
    


    
}
