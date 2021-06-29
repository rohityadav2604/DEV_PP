let Undo = document.querySelector("#undo");
let Redo = document.querySelector("#redo");

Undo.addEventListener("click" , UndoLine);
Redo.addEventListener("click" , RedoLine);


function RedoLine()
{
    console.log("inside redo");
    if(redoDb.length>=1)
    {
        let redoline = redoDb.pop();
        
        for(let i=0;i<redoline.length;i++)
        {
            let pointofobject = redoline[i];
            if(pointofobject.type == "mm")
            {
                ctx.lineWidth = pointofobject.pensize;
                ctx.strokeStyle = pointofobject.pencolor;
                ctx.lineTo(pointofobject.x , pointofobject.y);
                ctx.stroke();
            }
            else
            {
                ctx.lineWidth = pointofobject.pensize;
                ctx.strokeStyle = pointofobject.pencolor;
                ctx.beginPath();
                ctx.moveTo(pointofobject.x , pointofobject.y);
            }
        }

        LineDb.push(redoline);
    }
}




function UndoLine(e)
{
    if(LineDb.length)
    {
        redoDb.push(LineDb.pop());
       // console.log(redo);

        ctx.clearRect(0,0,canvas.width , canvas.height);
        drawline();


        
    }
}


function drawline()
{
    console.log("insdie");

    for(let i=0;i<LineDb.length;i++)
    {
        let LineObject = LineDb[i];

        for(let j=0;j<LineObject.length;j++)
        {
            let pointofobject = LineObject[j];
            if(pointofobject.type == "mm")
            {
                 ctx.lineWidth = pointofobject.pensize;
                 ctx.strokeStyle = pointofobject.pencolor;
                 
                // console.log(strokeStyle);
                 ctx.lineTo(pointofobject.x , pointofobject.y);
                 ctx.stroke();
            }
            else if(pointofobject.type == "md")
            {
                   ctx.lineWidth = pointofobject.pensize;
                   ctx.strokeStyle = pointofobject.pencolor;

                   ctx.beginPath();
                   ctx.moveTo(pointofobject.x , pointofobject.y);
            }
        }
    }
}