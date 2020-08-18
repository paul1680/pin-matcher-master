        // random number generator
        
        var generatorBtn = document.getElementById('generatorBtn');
        generatorBtn.addEventListener('click', function(){
            var c = Math.random()*10;
            var d = Math.floor(c);
            var v = d.toString();
            var e = Math.random()*10;
            var f = Math.floor(e);
            var x = f.toString();
            var g = Math.random()*10;
            var h = Math.floor(f);
            var y = h.toString();
            var i = Math.random()*10;
            var j = Math.floor(g);
            var z = j.toString();
            var k = v+x+y+z;

        document.getElementById('generator').focus();
        document.getElementById('generator').value = k;
              
        })

        // Display button 

       function disp(id){
        document.getElementById('display').focus(); 
        document.getElementById(id).value = document.getElementById(id).innerText;
        currentValue = document.getElementById(id).value;
           if(display.value == ''){
        document.getElementById('display').value = currentValue;
            }
            else{
                var prviousValue = document.getElementById('display').value;
                var newValue = prviousValue + currentValue;
                document.getElementById('display').value = newValue;
                
            }
       }

        var one = document.getElementById('one');
        one.addEventListener('click',function(){
            disp('one');
        })
        var two = document.getElementById('two');
        two.addEventListener('click',function(){
            disp('two')
        })
        var three = document.getElementById('three');
        three.addEventListener('click',function(){
            disp('three')
        })
        var four = document.getElementById('four');
        four.addEventListener('click',function(){
            disp('four')
        })
        var five = document.getElementById('five');
        five.addEventListener('click',function(){
            disp('five')
        })
        var six = document.getElementById('six');
        six.addEventListener('click',function(){
            disp('six')
        })
        var seven = document.getElementById('seven');
        seven.addEventListener('click',function(){
            disp('seven')
        })
        var eight = document.getElementById('eight');
        eight.addEventListener('click',function(){
            disp('eight')
        })
        var nine = document.getElementById('nine');
        nine.addEventListener('click',function(){
            disp('nine')
        })
        var zero = document.getElementById('zero');
        zero.addEventListener('click',function(){
            disp('zero')
        })
        var cancel = document.getElementById('cancel');
        cancel.addEventListener('click',function(){
        document.getElementById('display').value = '';   
        })
        var back = document.getElementById('back');
        back.addEventListener('click',function(){
            var valueDisplay = document.getElementById('display').value;
            var valueDisplay2 = valueDisplay.length - 1;
            var output = valueDisplay.substr(0, valueDisplay2);
            document.getElementById('display').value = output;
            document.getElementById('display').focus();
        })

         //submit button   

     var submit = document.getElementById('submit');
     submit.addEventListener('click',function(){
         document.getElementById('generator').focus();
         var first = document.getElementById('first');
         var second = document.getElementById('second');
         var generateValue = document.getElementById('generator').value;
         var gValue = parseFloat(generateValue);
         var displayValue = document.getElementById('display').value;
         var dValue = parseFloat(displayValue);
         if( gValue != dValue){
             first.style.display = 'block';
             second.style.display = 'none';
        var inputAmount = document.getElementById('try').innerText
        var inputAmount2 = parseFloat(inputAmount);
        inputAmount2--;
        document.getElementById('try').innerText = inputAmount2;
        if(inputAmount2 == 0){
            sub.style.display = 'none';
            disable.style.display = 'block';
        }
         }
         else{
            second.style.display = 'block';
            first.style.display = 'none';
         }
         document.getElementById('display').value = '';
         document.getElementById('generator').value = '';

    
     })   