//infoDisplay convert all the display of the next content to "none", because if we do this on css we have issues with the animations
function infoDisplay(){
    let INFO1 = document.querySelector("#GameListDiv1").style.display="none";
    let INFO2 = document.querySelector("#GameListDiv2").style.display="none";
    let INFO3 = document.querySelector("#GameListDiv3").style.display="none";
    let INFO4 = document.querySelector("#GameListDiv4").style.display="none";
    let INFO5 = document.querySelector("#GameListDiv5").style.display="none";
    let INFO6 = document.querySelector("#GameListDiv6").style.display="none";
    //Here we check if we're on pc or mobile device, changing the size of the unordered list depending on that
    let GAMES_UNORDERED_LIST = document.querySelector(".FavoriteGamesUnorderedList").style;
    let SIZE = 800;
    if(window.innerWidth <= SIZE){
        GAMES_UNORDERED_LIST.width = "65%";
    }
}
//Here we call infoDisplay
infoDisplay();
//This is the function that change the general size of the content
function seeContent(){
    let GAMES_UNORDERED_LIST = document.querySelector(".FavoriteGamesUnorderedList").style;
    if(GAMES_UNORDERED_LIST.width == "100%" && (
        document.querySelector("#GameListDiv1").style.display=="flex" ||
        document.querySelector("#GameListDiv2").style.display=="flex" ||
        document.querySelector("#GameListDiv3").style.display=="flex" ||
        document.querySelector("#GameListDiv4").style.display=="flex" ||
        document.querySelector("#GameListDiv5").style.display=="flex" ||
        document.querySelector("#GameListDiv6").style.display=="flex"
        )
        ){
            GAMES_UNORDERED_LIST.width = "100%";
        }
    else{
        GAMES_UNORDERED_LIST.transition = "1s"; 
        GAMES_UNORDERED_LIST.width = "100%";
    }
    returningSize();
}
function returningSize(){
    let GAMES_UNORDERED_LIST = document.querySelector(".FavoriteGamesUnorderedList").style;
    setTimeout(() => {
        let test = false;
        if(
            document.querySelector("#GameListDiv1").style.display=="none" &&
            document.querySelector("#GameListDiv2").style.display=="none" &&
            document.querySelector("#GameListDiv3").style.display=="none" &&
            document.querySelector("#GameListDiv4").style.display=="none" &&
            document.querySelector("#GameListDiv5").style.display=="none" &&
            document.querySelector("#GameListDiv6").style.display=="none"
        ){
            test = true;
        }
        if (test == true){
            let SIZE = 800;
            if(window.innerWidth <= SIZE){
                GAMES_UNORDERED_LIST.transition = ".8s"; 
                GAMES_UNORDERED_LIST.width = "65%";
            }
            else{
                GAMES_UNORDERED_LIST.transition = ".8s"; 
                GAMES_UNORDERED_LIST.width = "35%";
            }
        }
    }, 1500);
}

function eldenRing(){
    seeContent();
    let ELDEN_INFO = document.querySelector("#GameListDiv1");
    let BACKGROUND = document.querySelector("#EldenRing").style;
    if(ELDEN_INFO.style.display=="flex"){
        ELDEN_INFO.style.transition=".5s";
        ELDEN_INFO.style.opacity="0";
        setTimeout(() => {
            ELDEN_INFO.style.display="none";
            setTimeout(() => {
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "";    
            },1500)
        }, 1000);
    }
    else{
        setTimeout(() => {
            ELDEN_INFO.style.display="flex";
            ELDEN_INFO.style.backgroundImage = 
            "url(imagenes/juegos/imagenes-blur/elden-ring-blur.png)";
            ELDEN_INFO.style.backgroundSize = "cover";
            ELDEN_INFO.style.backgroundPosition = "center";
            setTimeout(() => {
                ELDEN_INFO.style.transition=".5s";
                ELDEN_INFO.style.opacity="1";
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "#111111";
            }, 500)
        }, 1000);
    }
}
function liesOfP(){
    seeContent();
    let LIES_INFO = document.querySelector("#GameListDiv2");
    let BACKGROUND = document.querySelector("#LiesOfP").style;
    if(LIES_INFO.style.display=="flex"){
        LIES_INFO.style.transition=".5s";
        LIES_INFO.style.opacity="0";
        setTimeout(() => {
            LIES_INFO.style.display="none";
            setTimeout(() => {
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "";    
            },1500)
        }, 1000);
    }
    else{
        setTimeout(() => {
            LIES_INFO.style.display="flex";
            LIES_INFO.style.backgroundImage = 
            "url(imagenes/juegos/imagenes-blur/lies-of-p-blur.png)";
            LIES_INFO.style.backgroundSize = "cover";
            LIES_INFO.style.backgroundPosition = "center";
            setTimeout(() => {
                LIES_INFO.style.transition=".5s";
                LIES_INFO.style.opacity="1";
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "#111111";
            }, 500)
        }, 1000);
    }
}
function Sekiro(){
    seeContent();
    let SEKIRO_INFO = document.querySelector("#GameListDiv3");
    let BACKGROUND = document.querySelector("#Sekiro").style;
    if(SEKIRO_INFO.style.display=="flex"){
        SEKIRO_INFO.style.transition=".5s";
        SEKIRO_INFO.style.opacity="0";
        setTimeout(() => {
            SEKIRO_INFO.style.display="none";
            setTimeout(() => {
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "";    
            },1500)
        }, 1000);
    }
    else{
        setTimeout(() => {
            SEKIRO_INFO.style.display="flex";
            SEKIRO_INFO.style.backgroundImage = 
            "url(imagenes/juegos/imagenes-blur/sekiro-blur.png)";
            SEKIRO_INFO.style.backgroundSize = "cover";
            SEKIRO_INFO.style.backgroundPosition = "center";
            setTimeout(() => {
                SEKIRO_INFO.style.transition=".5s";
                SEKIRO_INFO.style.opacity="1";
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "#111111";
            }, 500)
        }, 1000);
    }
}
function ark(){
    seeContent();
    let ARK_INFO = document.querySelector("#GameListDiv4");
    let BACKGROUND = document.querySelector("#Ark").style;
    if(ARK_INFO.style.display=="flex"){
        ARK_INFO.style.transition=".5s";
        ARK_INFO.style.opacity="0";
        setTimeout(() => {
            ARK_INFO.style.display="none";
            setTimeout(() => {
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "";    
            },1500)
        }, 1000);
    }
    else{
        setTimeout(() => {
            ARK_INFO.style.display="flex";
            ARK_INFO.style.backgroundImage = 
            "url(imagenes/juegos/imagenes-blur/ark-blur.png)";
            ARK_INFO.style.backgroundSize = "cover";
            ARK_INFO.style.backgroundPosition = "center";
            setTimeout(() => {
                ARK_INFO.style.transition=".5s";
                ARK_INFO.style.opacity="1";
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "#111111";
            }, 500)
        }, 1000);
    }
}
function fortnite(){
    seeContent();
    let FORTNITE_INFO = document.querySelector("#GameListDiv5");
    let BACKGROUND = document.querySelector("#Fortnite").style;
    if(FORTNITE_INFO.style.display=="flex"){
        FORTNITE_INFO.style.transition=".5s";
        FORTNITE_INFO.style.opacity="0";
        setTimeout(() => {
            FORTNITE_INFO.style.display="none";
            setTimeout(() => {
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "";    
            },1500)
        }, 1000);
    }
    else{
        setTimeout(() => {
            FORTNITE_INFO.style.display="flex";
            FORTNITE_INFO.style.backgroundImage = 
            "url(imagenes/juegos/imagenes-blur/fortnite-blur.png)";
            FORTNITE_INFO.style.backgroundSize = "cover";
            FORTNITE_INFO.style.backgroundPosition = "center";
            setTimeout(() => {
                FORTNITE_INFO.style.transition=".5s";
                FORTNITE_INFO.style.opacity="1";
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "#111111";
            }, 500)
        }, 1000);
    }
}
function rocketLeague(){
    seeContent();
    let ROCKET_LEAGUE_INFO = document.querySelector("#GameListDiv6");
    let BACKGROUND = document.querySelector("#RocketLeague").style;
    if(ROCKET_LEAGUE_INFO.style.display=="flex"){
        ROCKET_LEAGUE_INFO.style.transition=".5s";
        ROCKET_LEAGUE_INFO.style.opacity="0";
        setTimeout(() => {
            ROCKET_LEAGUE_INFO.style.display="none";
            setTimeout(() => {
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "";    
            },1500)
        }, 1000);
    }
    else{
        setTimeout(() => {
            ROCKET_LEAGUE_INFO.style.display="flex";
            ROCKET_LEAGUE_INFO.style.backgroundImage = 
            "url(imagenes/juegos/imagenes-blur/rocket-league-blur.png)";
            ROCKET_LEAGUE_INFO.style.backgroundSize = "cover";
            ROCKET_LEAGUE_INFO.style.backgroundPosition = "center";
            setTimeout(() => {
                ROCKET_LEAGUE_INFO.style.transition=".5s";
                ROCKET_LEAGUE_INFO.style.opacity="1";
                BACKGROUND.transition = ".5s";
                BACKGROUND.backgroundColor = "#111111";
            }, 500)
        }, 1000);
    }
}