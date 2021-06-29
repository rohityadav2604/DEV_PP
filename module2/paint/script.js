let canvas = document.querySelector("#canvas");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight-100;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    drawline();
  });



  let ctx = canvas.getContext("2d");
  let ispendown = false;
  let lines = [];
  let LineDb = [];
  let redoDb=[];
  canvas.addEventListener("mousedown" , function(e){
           if(redoDb.length)
           {
               redoDb=[];
           }
           let x = e.clientX;
           let y = e.clientY-100;
           ispendown = true;
           ctx.beginPath();
           ctx.moveTo(x,y);
           let pointofobject = {
               x:x,
               y:y,
               type:"md",
               pensize: ctx.lineWidth,
               pencolor: ctx.strokeStyle


           }
           lines.push(pointofobject);
  });


  canvas.addEventListener("mousemove"  , function(e){
         if(ispendown)
         {
            let x = e.clientX;
            let y = e.clientY - 100;
            ctx.lineTo(x, y);
            ctx.stroke();
            let pointofobject = {
                x:x,
                y:y,
                type:"mm",
                pensize: ctx.lineWidth,
                pencolor: ctx.strokeStyle
 
            }
            lines.push(pointofobject);

         }
  });

  canvas.addEventListener("mouseup" , function(e){
       ispendown=false;
       LineDb.push(lines);
       lines=[];
       
  });