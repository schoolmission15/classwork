var company = document.getElementById("company");
company.onclick = function() { 
    
    var talk = document.getElementById("talk").value;
    console.log(talk);
    if (talk == 'WWE'){
        greeting ="CORRECT"
                      
    } else {
        
     greeting = "WRONG!"
    }
    
    var message1 = document.getElementById("message1");
    message1.innerHTML = greeting;
    
};

var years = document.getElementById("years");
years.onclick = function() { 
    
    var go = document.getElementById("go").value;
    console.log(go);
    if (go == '3'){
        greeting ="CORRECT"
                      
    } else {
        
     greeting = "WRONG!"
    }
    
    var message2 = document.getElementById("message2");
    message2.innerHTML = greeting;
    
};

var move = document.getElementById("move");
move.onclick = function() { 
    
    var top = document.getElementById("top").value;
    console.log(top);
    if (top == 'Attitude Adjustment'){
        greeting ="CORRECT"
                      
    } else {
        
     greeting = "WRONG!"
    }
    
    var message3 = document.getElementById("message3");
    message3.innerHTML = greeting;
    
};

var title = document.getElementById("title");
title.onclick = function() { 
    
    var down = document.getElementById("down").value;
    console.log(down);
    if (down == 'WWE World Heavyweight Championship'){
        greeting ="CORRECT"
                      
    } else {
        
     greeting = "WRONG!"
    }
    
    var message4 = document.getElementById("message4");
    message4.innerHTML = greeting;
    
};