
document.addEventListener("DOMContentLoaded", function() {
    var keysContainer = document.querySelector(".keys");
    var previous_result_var = ""
    var new_equation = false
    keysContainer.addEventListener("click", function(event) {
        var clickedElement = event.target;
        var result = document.querySelector(".result #result").textContent ;
        if (result.length < 20 && clickedElement.id.startsWith("key-") && (clickedElement.textContent === "ANS" || (clickedElement.textContent != "CLE" && clickedElement.textContent !="<" && clickedElement.textContent !="="))) {
            if (new_equation === true)
                clearScreen(document.querySelector(".result #result"))
            // add the previous answer to the equation
            if (clickedElement.textContent === "ANS")
                document.querySelector(".result #result").innerHTML += previous_result_var
            else
                document.querySelector(".result #result").innerHTML += clickedElement.textContent;
        }
        //change the style on click
        if (clickedElement.id.startsWith("key-")){
            clickedElement.style.transform = "translate(1px, 1px)";
            clickedElement.style.boxShadow = "0px 0px 0px rgba(225, 133, 108, 0.9)";
            setTimeout(function() {
                clickedElement.style.color = ""; // Revert color to default (empty string)
                clickedElement.style.transform = ""; // Revert transform to default (empty string)
                clickedElement.style.boxShadow = ""; // Revert box shadow to default (empty string)
            }, 200);
        }
        function clearScreen(query){
            query.innerHTML = ""
        }
        //clear the result
        if (clickedElement.textContent == "CLE")
            clearScreen(document.querySelector(".result #result")) 


        //remove the last element from the result
        if (result != "" && clickedElement.textContent === "<"){
            document.querySelector(".result #result").textContent =result.slice(0, -1) ;
        }
        
        //check if the previous result pass the screen
        previous_result = document.querySelector("#prev-result").textContent
        if (previous_result.length > 30)
            document.querySelector("#prev-result").textContent = previous_result.slice(0,28).concat("...")
    
        function validEquation(inputString){
            try {
                // Attempt to evaluate the expression
                eval(inputString);
                return true; // If the expression is valid, return true
            } catch (error) {
                return false; // If an error occurs, return false
            }
        }
    
        function calculate_result(inputString){
            try {
                var result = eval(inputString);
                // Check if the result is a number before rounding
                if (result % 1 !== 0) {
                    result = result.toFixed(2);
                } else {
                    result = (result.toString().endsWith(".0") ? result.toString() : parseInt(result));
                }
                return result;
            } catch (error) {
                return null;
            }
        }
        
        // if the user press the equal button
        if (clickedElement.textContent === "="){
            if (validEquation(result) === false){
                result_var = document.querySelector("#result").textContent
                document.querySelector("#result").textContent = "Error!"
                setTimeout(function() {
                    document.querySelector("#result").textContent = result_var
                }, 700);
            }
            else{
                final_result = calculate_result(result)
                document.querySelector("#result").textContent = ""
                new_equation = true
                previous_result_var = final_result
                document.querySelector("#prev-result").textContent = previous_result_var
            }
        }
        else
            new_equation = false ;
    });
});
