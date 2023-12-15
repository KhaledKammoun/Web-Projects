document.addEventListener("DOMContentLoaded", function(){
    var nbTotal = 0, nbCount = 0 ;
    document.querySelector(".button").addEventListener("click", function(){
        document.querySelector("#result-1").innerHTML = (++nbCount) ;
        if ((nbCount) % 20 == 0){
            document.querySelector("#result-2").innerHTML = (++nbTotal) ;
            document.querySelector("#result-1").innerHTML = 0 ;
            nbCount = 0 ;
        }
    }) ;

}) ;

