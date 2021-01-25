/* date & time */
 var a = setInterval (function(){ autoTime() },1000)

function autoTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();

    document.getElementById('timer').innerHTML=time;
}


/* changecolor bg */
function changebg(id) {
   switch (id) {
       case 1 :
           document.body.style.backgroundImage = "url(../img/p1.jpg)";
           break;
       case 2 : 
           document.body.style.backgroundImage = "url(../img/p2.jpg)";
           break;
       case 3 : 
           document.body.style.backgroundImage = "url(../img/p3.png)";
           break;
       case 4 : 
           document.body.style.backgroundImage = "url(../img/p4.jpg)";
           break;
       default : 
           document.body.style.backgroundImage = "url(../img/p5.jpg)";
          
       
              
   }
}

/* onclick img[] will show  one img , other img[] will none */
function show_img(h) {
    switch(h) {
    
        case 1:
            document.getElementsByClassName("heroimg")[0].style.display = "block";
            document.getElementsByClassName("heroimg")[1].style.display = "none";
            document.getElementsByClassName("heroimg")[2].style.display = "none";
            document.getElementsByClassName("heroimg")[3].style.display = "none";
            document.getElementsByClassName("heroimg")[4].style.display = "none";
            document.getElementsByClassName("heroimg")[5].style.display = "none";
            
            break;
        case 2:
            document.getElementsByClassName("heroimg")[0].style.display = "none";
            document.getElementsByClassName("heroimg")[1].style.display = "block";
            document.getElementsByClassName("heroimg")[2].style.display = "none";
            document.getElementsByClassName("heroimg")[3].style.display = "none";
            document.getElementsByClassName("heroimg")[4].style.display = "none";
            document.getElementsByClassName("heroimg")[5].style.display = "none";
            
            break;
        case 3:
            document.getElementsByClassName("heroimg")[0].style.display = "none";
            document.getElementsByClassName("heroimg")[1].style.display = "none";
            document.getElementsByClassName("heroimg")[2].style.display = "block";
            document.getElementsByClassName("heroimg")[3].style.display = "none";
            document.getElementsByClassName("heroimg")[4].style.display = "none";
            document.getElementsByClassName("heroimg")[5].style.display = "none";
            
            break;
        case 4:
            document.getElementsByClassName("heroimg")[0].style.display = "none";
            document.getElementsByClassName("heroimg")[1].style.display = "none";
            document.getElementsByClassName("heroimg")[2].style.display = "none";
            document.getElementsByClassName("heroimg")[3].style.display = "block";
            document.getElementsByClassName("heroimg")[4].style.display = "none";
            document.getElementsByClassName("heroimg")[5].style.display = "none";
            
            break;
        case 5:
            document.getElementsByClassName("heroimg")[0].style.display = "none";
            document.getElementsByClassName("heroimg")[1].style.display = "none";
            document.getElementsByClassName("heroimg")[2].style.display = "none";
            document.getElementsByClassName("heroimg")[3].style.display = "none";
            document.getElementsByClassName("heroimg")[4].style.display = "block";
            document.getElementsByClassName("heroimg")[5].style.display = "none";
            
            break;
            
        default :
            document.getElementsByClassName("heroimg")[0].style.display = "none";
            document.getElementsByClassName("heroimg")[1].style.display = "none";
            document.getElementsByClassName("heroimg")[2].style.display = "none";
            document.getElementsByClassName("heroimg")[3].style.display = "none";
            document.getElementsByClassName("heroimg")[4].style.display = "none";
            document.getElementsByClassName("heroimg")[5].style.display = "block";   
            
           
           }
}

/* onclick img[] will close the img */
function close_img() {
    
            document.getElementsByClassName("heroimg")[0].style.display = "none";
            document.getElementsByClassName("heroimg")[1].style.display = "none";
            document.getElementsByClassName("heroimg")[2].style.display = "none";
            document.getElementsByClassName("heroimg")[3].style.display = "none";
            document.getElementsByClassName("heroimg")[4].style.display = "none";
            document.getElementsByClassName("heroimg")[5].style.display = "none";   
}



/* go to nextpage */
function nextPage() {
    document.location.href = "ThirdPage.html";
}