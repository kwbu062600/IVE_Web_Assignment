/* onclick img[] will show  one img , other img[] will none */
function show_kdaimg(k) {
    switch(k) {
    
        case 1:
            document.getElementsByClassName("kda_img")[0].style.display = "block";
            document.getElementsByClassName("kda_img")[1].style.display = "none";
            document.getElementsByClassName("kda_img")[2].style.display = "none";
            document.getElementsByClassName("kda_img")[3].style.display = "none";
            
            break;
        case 2:
            document.getElementsByClassName("kda_img")[0].style.display = "none";
            document.getElementsByClassName("kda_img")[1].style.display = "block";
            document.getElementsByClassName("kda_img")[2].style.display = "none";
            document.getElementsByClassName("kda_img")[3].style.display = "none";
            
            
            break;
        case 3:
            document.getElementsByClassName("kda_img")[0].style.display = "none";
            document.getElementsByClassName("kda_img")[1].style.display = "none";
            document.getElementsByClassName("kda_img")[2].style.display = "block";
            document.getElementsByClassName("kda_img")[3].style.display = "none";
            
            break;
            
         default :
            document.getElementsByClassName("kda_img")[0].style.display = "none";
            document.getElementsByClassName("kda_img")[1].style.display = "none";
            document.getElementsByClassName("kda_img")[2].style.display = "none";
            document.getElementsByClassName("kda_img")[3].style.display = "block";   
           }
}

/* onclick img[] will close the img */
function close_img() {
    
            document.getElementsByClassName("kda_img")[0].style.display = "none";
            document.getElementsByClassName("kda_img")[1].style.display = "none";
            document.getElementsByClassName("kda_img")[2].style.display = "none";
            document.getElementsByClassName("kda_img")[3].style.display = "none";
            document.getElementsByClassName("kda_img")[4].style.display = "none";
            document.getElementsByClassName("kda_img")[5].style.display = "none";   
}

/* go to nextpage */
function nextPage() {
    document.location.href = "Main.html";
}