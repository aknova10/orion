

function menuReveal() {
    var x = document.getElementById("menu-open").src;
    // alert(x);
    if(x == "http://127.0.0.1:5500/img/openMenu.svg")
    {
        document.getElementById("menu-open").src = "http://127.0.0.1:5500/img/closeMenu.svg";
        
    }  
    else
    {
        document.getElementById("menu-open").src = "http://127.0.0.1:5500/img/openMenu.svg";
    }
    
}

// function menuHide() {
//     var open = document.getElementById("menu-open");
//     var close = document.getElementById("menu-close");
//     if(close.style.display === 'block') 
//     {
//         close.style.display == 'none';
//         open.style.display == 'block';
//     }
// }

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function navOpen() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.top === "90%") {

        navbar.style.position = "fixed"; 
        navbar.style.top = "10%"; 
        navbar.style.bottom = "0%"; 
        navbar.style.left = "0%"; 
        navbar.style.right = "0%"; 
        document.getElementById("nav-item").style.display= "flex";
    }
    else {
        navbar.style.position = "fixed"; 
        navbar.style.top = "90%"; 
        navbar.style.bottom = "0%"; 
        navbar.style.left = "0%"; 
        navbar.style.right = "0%";
        document.getElementById("nav-item").style.display= "none";
    }
}