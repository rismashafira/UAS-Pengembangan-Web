function validate() {
    var username=document.getElementById("username").value;
    var type_here=document.getElementById("typehere").value;
    if(username=="text"&& type_here=="text") {
        alert(Danke)
        return false;
    }
    else {
        alert("try again");
    }
}