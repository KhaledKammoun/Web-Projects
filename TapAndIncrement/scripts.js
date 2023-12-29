document.addEventListener("DOMContentLoaded", function(){
    var tab_salat = [0, 0, 0, 0, 0];
    var trElements = document.querySelectorAll("#table-1 tr");
    for (var i = 0; i < 5; i++) {
        tab_salat[i] = trElements[i].querySelector('.val'+ i.toString());
    }

    nbCount = 33 * 4 ;
    document.querySelector("#result-1").innerHTML = nbCount
    document.querySelector(".button").addEventListener("click", function(){
        document.querySelector("#result-1").innerHTML = (--nbCount) ;
        if (nbCount == 0){
            nbCount = 33 * 4 ;
            document.querySelector("#result-1").innerHTML = nbCount ;
        }
    }) ;


    document.querySelector(".newDayButton").addEventListener("click", function(){
        for (var i = 0; i < 5; i++) {
            tab_salat[i].innerHTML++;
        }
    })

    function changeValues(variable){
        for (var i = 0; i < 5; i++) {
            (function(index) {
                document.querySelector('.button'+variable+'Val' + index.toString()).addEventListener("click", function() {
                    if (variable == "Plus")
                        tab_salat[index].innerHTML++;
                    else if (variable == "Minus" && tab_salat[index].innerHTML >0)
                        tab_salat[index].innerHTML-- ;
                });
    
            })(i);
        }
    }
    changeValues("Minus") ;
    changeValues("Plus") ;


}) ;

