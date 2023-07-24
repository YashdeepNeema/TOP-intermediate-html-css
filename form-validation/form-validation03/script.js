const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    if(email.validity.typeMismatch){
        email.setCustomValidity("email de re!!");
    } else{
        email.setCustomValidity("");
    }
});