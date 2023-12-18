document.addEventListener("DOMContentLoaded", function(){
    var tab_salat = [0, 0, 0, 0, 0];
    var  nbCount = 0 ;
    var trElements = document.querySelectorAll("#table-1 tr");

    for (var i = 0; i < 5; i++) {
        tab_salat[i] = trElements[i].querySelector('#val');
    }
    document.querySelector(".button").addEventListener("click", function(){
        document.querySelector("#result-1").innerHTML = (++nbCount) ;
        if ((nbCount) % 20 == 0){
            document.querySelector("#result-1").innerHTML = 0 ;
            nbCount = 0 ;
        }
    }) ;


    document.querySelector(".newDayButton").addEventListener("click", function(){
        for (var i = 0; i < 5; i++) {
            tab_salat[i].innerHTML++;
        }
    })
}) ;

