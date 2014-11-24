var leftNumber = "";
    var rightNumber = "";
    var currentDisplay = "";
    var currentOperator = ""; 
    var currentNumber = "0";
    var lastInput = "0";
    
    
    window.onload = function()
    {      
      var elements = document.getElementsByClassName('button');

      for (var i = 0; i < elements.length; i+=1)
      {
        elements[i].onclick = handleInput;
      }  
    };

 
     
    var handleInput = function()
    {
       var input = this.innerHTML;
      var solution = 0;
      var left = 0;
      var right = 0;
        
        if (input === "=")
        {
              solution = 0;
             rightNumber = currentNumber;
             left = Number(leftNumber);
             right = Number(rightNumber);

              switch (currentOperator)
                {
                  case "+":
                    solution = (left + right);
                    break;
                  case "-":
                    solution = (left - right);
                    break;
                  case "*":
                    solution = (left * right);
                    break;
                  case "/":
                    solution = (left / right);
                    break;
                }

               leftNumber = solution;
               rightNumber = "";
               currentNumber = "";
               currentOperator = "";
            currentDisplay = leftNumber;
        }

        else if (input === "C")
        {
          clear();
        }

      
      
      // if it's not a number (operator)
       else if (isNaN(Number(input)))
       {
         
         if (currentOperator === "")
           {
             currentOperator = input;
             leftNumber = currentNumber;
             currentNumber = "";
           }
         
         else
           {
             solution = 0;
             rightNumber = currentNumber;
              left = Number(leftNumber);
             right = Number(rightNumber);

              switch (currentOperator)
                {
                  case "+":
                    solution = (left + right);
                    break;
                  case "-":
                    solution = (left - right);
                    break;
                  case "*":
                    solution = (left * right);
                    break;
                  case "/":
                    solution = (left / right);
                    break;
                }

               leftNumber = solution;
               rightNumber = "";
               currentNumber = "";
               currentOperator = input;
             currentDisplay = leftNumber;


           }
         
       }
      
      // it's a number
      else
      {
          currentNumber += input;
         currentDisplay = Number(currentNumber);
      }
      
      
      var operatorDisplay = document.getElementById('operator_display');
      var resultDisplay = document.getElementById('result_display_value');
      
      operatorDisplay.innerHTML = currentOperator;
      resultDisplay.innerHTML = currentDisplay;
      
    };
    
    var clear = function()
    {
      currentNumber = "";
          leftNumber = "";
          rightNumber = "";
          currentOperator = "";
      currentDisplay = "";
      
      
    };
    
 