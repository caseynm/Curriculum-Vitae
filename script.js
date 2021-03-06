
function create() {
    //Getting the values
    let first = document.getElementById("first").value;
    let middle = document.getElementById("middle").value;
    let last = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let addy = document.getElementById("addy").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;

    //Saving the values in local storage
    localStorage.setItem("Value", first);
    localStorage.setItem("Value1", middle);
    localStorage.setItem("Value2", last);
    localStorage.setItem("Value3", addy);
    localStorage.setItem("Value4", phone);
    localStorage.setItem("Value5", email);
    localStorage.setItem("Value6", gender);

    //Nested function for form field validation
    function validate() {
    //Using regex to validate form fields
    let first = document.getElementById("first").value;
    if (
      first == null ||
      !first.match(/^[A-Za-z ,.'-]+$/i)
    ) {
      alert("'First Name' is Empty or Invalid");
      return false;
    }
    let last = document.getElementById("last").value;
    if (
      last == null ||
      !last.match(/^[A-Za-z ,.'-]+$/i)
    ) {
      alert("'Last Name' is Empty or Invalid");
      return false;
    }
    let cell = document.getElementById("phone").value;
    if (cell == null || !cell.match(/^[- +()]*[0-9][- +()0-9]*$/)) {
      alert("Enter a Valid Phone Number");
      return false;
    }
    let mail = document.getElementById("email").value;
    if (mail == null || !mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Enter an Email Address");
      return false;
    }
    let gend = document.getElementById("gender").value;
    if (gend == "") {
      alert("Select a gender");
      return false;
    }
  }
  return validate()
}
