
function validate()
{
    console.log("hi");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if(name.trim().length===0)
    {
        alert("name cannot be empty");
        return false;
    }
    if(email.trim().length===0)
    {
        alert("email cannot be empty");
        return false;
    }
    if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        alert("email is not valid be empty");
        return false;
    }
    return true;
}
function accepted()
{
    alert("successfully submitted the form!!");
    return true;
}

function denied()
{
    alert("check your form fields, form not submitted!");
    return false;
}

/* scripts for image container */

data.images.forEach( function(obj) {
    var img = new Image();
    img.src = obj.image;
    document.getElementById("gallery-grid").appendChild(img);
  });