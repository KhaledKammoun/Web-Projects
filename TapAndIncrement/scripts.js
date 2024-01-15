document.addEventListener("DOMContentLoaded", function(){
    var tab_salat = [0, 0, 0, 0, 0, 0];
    var trElements = document.querySelectorAll("#table-1 tr");
    for (var i = 0; i < tab_salat.length; i++) {
        tab_salat[i] = trElements[i].querySelector('.val'+ i.toString());
    }
    var varCount, nbCount;
    var val_tab, val_tab_index ;
    document.querySelector(".button").addEventListener("click", function(){
        document.querySelector("#result-1").innerHTML = (--nbCount) ;
        
        if (nbCount == 0){
            nbCount = varCount;
            document.querySelector("#result-1").innerHTML = varCount ;
        }
        if (tab_salat[val_tab_index].textContent > 0 && nbCount % val_tab == 0) {
            tab_salat[val_tab_index].textContent-- ;
            
            document.querySelector("#result-2").innerHTML = tab_salat[val_tab_index].textContent ;
            const resultElement1 = document.querySelector("#result-2");
            const fontSizeNumeric = parseFloat(window.getComputedStyle(resultElement1).fontSize);
            
            // Set the --base-font-size variable using document.documentElement
            document.documentElement.style.setProperty('--base-font-size', fontSizeNumeric + 'px');
            
            // Add 'shake' class to apply the animation
            document.querySelector("#result-2").classList.add('shake');

            // Remove 'shake' class after a delay (100 milliseconds in this case)
            setTimeout(() => {
                document.querySelector("#result-2").classList.remove('shake');
            }, 100);
        }
        const resultElement = document.getElementById('result-1');
        const result_1_font_size = parseFloat(window.getComputedStyle(resultElement).fontSize);
            
        // Set the --base-font-size variable using document.documentElement
        document.documentElement.style.setProperty('--base-font-size', result_1_font_size + 'px');
        resultElement.classList.add('shake');
        setTimeout(() => {
            resultElement.classList.remove('shake');
          }, 100);
    }) ;


    document.querySelector(".newDayButton").addEventListener("click", function(){
        for (var i = 0; i < tab_salat.length; i++) {
            tab_salat[i].innerHTML++;
        }
    })

    function changeValues(variable){
        for (var i = 0; i < 6; i++) {
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


    // show the lable :
    const thElements = document.querySelectorAll('th');
    const contentLabel = document.querySelector('.content_lable');
    const contentString = document.getElementById('content_string');
    const contentClose = document.getElementById('content_close');
    const contentWrapper = document.querySelector('.content');
    thElements.forEach((th, i) => {
        th.addEventListener("click", function () {
            const thContent = this.textContent.trim();
            contentString.textContent = thContent;
            adjustFontSizeToFit();
            showContentLabel();
            applyBlur() ;
            var tab = [20, 20, 33, 100, 100, 100];
            console.log(i) ;
            document.querySelector("#result-1").innerHTML = tab[i] * tab_salat[i].textContent;
            document.querySelector("#result-2").innerHTML = tab_salat[i].textContent ;
            varCount = tab[i] * tab_salat[i].textContent;
            val_tab = tab[i] ;
            val_tab_index = i ;
            nbCount = varCount ;
        });
    });
    contentClose.addEventListener("click", function () {
        hideContentLabel();
    });
    function showContentLabel() {
        
        contentLabel.style.display = 'block';
        setTimeout(() => {
            contentLabel.classList.add('show'); // Add the 'show' class after a short delay
        }, 50); // Adjust the delay as needed
    }

    function hideContentLabel() {
    contentLabel.classList.remove('show');
    contentLabel.classList.add('hide'); // Add the 'hide' class for the hiding animation
    setTimeout(() => {
        contentLabel.style.display = 'none';
        contentLabel.classList.remove('hide'); // Remove the 'hide' class after the hiding animation
        removeBlur();
    }, 50); // Adjust the delay to match the transition duration
}
    function applyBlur() {
        contentWrapper.classList.add('blur-content');
    }
    
    function removeBlur() {
        contentWrapper.classList.remove('blur-content');
    }
    function adjustFontSizeToFit() {
        const maxHeight = 110; // Set your desired max height
        const originalFontSize = 30; // Set your default font size
    
        contentString.style.fontSize = originalFontSize + 'px';
        let contentHeight = contentString.scrollHeight;
    
        while (contentHeight > maxHeight && parseFloat(contentString.style.fontSize) > 1) {
            const currentFontSize = parseFloat(contentString.style.fontSize);
            contentString.style.fontSize = (currentFontSize - 3) + 'px';
            contentHeight = contentString.scrollHeight;
        }
    }
    
}) ;

