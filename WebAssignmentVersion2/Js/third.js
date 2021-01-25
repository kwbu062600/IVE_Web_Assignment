/* onclick show the showGuide */
function showGuide(){
    document.getElementById("gameGuide").style.display = "block";
}

/* onclick close the showGuide */
function closeGuide(){
    document.getElementById("gameGuide").style.display = "none";
}

/* onclick hero[] will show  one hero , other hero[] will none */
function showHeroInfo(num){
    switch (num) {
        case 1:
        document.getElementById("content").style.display = "none";
        document.getElementsByClassName("hero")[0].style.display = "block";
        document.getElementsByClassName("hero")[1].style.display = "none";
        document.getElementsByClassName("hero")[2].style.display = "none";
        document.getElementsByClassName("hero")[3].style.display = "none";
        document.getElementsByClassName("hero")[4].style.display = "none";
            
        break;
        
        case 2:
        document.getElementById("content").style.display = "none";
        document.getElementsByClassName("hero")[0].style.display = "none";
        document.getElementsByClassName("hero")[1].style.display = "block";
        document.getElementsByClassName("hero")[2].style.display = "none";
        document.getElementsByClassName("hero")[3].style.display = "none";
        document.getElementsByClassName("hero")[4].style.display = "none";     
            
         
        break;
            
        case 3:
        document.getElementById("content").style.display = "none";
        document.getElementsByClassName("hero")[0].style.display = "none"; 
        document.getElementsByClassName("hero")[1].style.display = "none";     
        document.getElementsByClassName("hero")[2].style.display = "block";
        document.getElementsByClassName("hero")[3].style.display = "none";
        document.getElementsByClassName("hero")[4].style.display = "none";     
                 
        break;  
        
        case 4:
        document.getElementById("content").style.display = "none";
        document.getElementById("content").style.display = "none";
        document.getElementsByClassName("hero")[0].style.display = "none"; 
        document.getElementsByClassName("hero")[1].style.display = "none"; document.getElementsByClassName("hero")[2].style.display = "none";    
        document.getElementsByClassName("hero")[3].style.display = "block";
        document.getElementsByClassName("hero")[4].style.display = "none";     
            
        break;
            
        case 5:
        document.getElementById("content").style.display = "none";
        document.getElementsByClassName("hero")[0].style.display = "none"; 
        document.getElementsByClassName("hero")[1].style.display = "none"; document.getElementsByClassName("hero")[2].style.display = "none"; document.getElementsByClassName("hero")[3].style.display = "none"; 
        document.getElementsByClassName("hero")[4].style.display = "block";
            
        break;
            
        default:
        document.getElementById("content").style.display = "block";
        document.getElementsByClassName("video")[0].style.display = "none";
        document.getElementsByClassName("hero")[0].style.display = "none"; 
        document.getElementsByClassName("hero")[1].style.display = "none"; document.getElementsByClassName("hero")[2].style.display = "none"; document.getElementsByClassName("hero")[3].style.display = "none"; 
        document.getElementsByClassName("hero")[4].style.display = "none";    
    }
}
/* logout to login page , agian login */
function logout(){
    document.location.href = "index.html";
}

/* onclick show the video , if onclick gameguide will close */
function showVideo(){
    document.getElementsByClassName("video")[0].style.display = "block";
    document.getElementById("gameGuide").style.display = "none";
}

