/* after 3s, call jump() to load the Main.html */
onload = function (){
    setTimeout(jump,3000);
}

/* function load to next page */
function jump(){
    document.location.href = 'Main.html';
}