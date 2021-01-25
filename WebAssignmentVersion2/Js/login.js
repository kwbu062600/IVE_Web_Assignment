/* login function */
function nextPage (form) {
   /* designation input username & password */ 
    if(form.username.value == "ITE3006ac" && form.password.value == "c29032019") 
        document.location.href = 'loading.html';
    /* if not will output this */
    else 
        alert("Invalid User");
  
}