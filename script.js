function create() {
//gettting the values
    let first = document.getElementById("first").value;
    let middle= document.getElementById("middle").value; 
    let last= document.getElementById("last").value; 
    let email= document.getElementById("email").value;
    let addy= document.getElementById("addy").value;
    let phone= document.getElementById("phone").value;
    let gender= document.getElementById("gender").value;
    //saving the values in session storage
    sessionStorage.setItem("Value", first);
    sessionStorage.setItem("Value1", middle);
    sessionStorage.setItem("Value2", last);
    sessionStorage.setItem("Value3", addy);
    sessionStorage.setItem("Value4", phone);
    sessionStorage.setItem("Value5", email);
    sessionStorage.setItem("Value6", gender);
}

document.getElementById("data").innerHTML=sessionStorage.getItem("Value");
document.getElementById("data3").innerHTML=sessionStorage.getItem("Value3");
document.getElementById("data4").innerHTML=sessionStorage.getItem("Value4");
document.getElementById("data5").innerHTML=sessionStorage.getItem("Value5");
document.getElementById("data6").innerHTML=sessionStorage.getItem("Value6");