console.log("CoreGame подключен!")
 VK.init(function() { 
     // API initialization succeeded 
     // Your code here
     console.log("OK!")
  }, function() { 
     // API initialization failed 
     // Can reload page here
     console.log("NO OK!") 
}, '5.101'); 


//canvas
var canvas = document.getElementById("canvasGame");
var ctx = canvas.getContext("2d");

ctx.fillStyle = 'green';
ctx.fillRect(10,10,100,100);