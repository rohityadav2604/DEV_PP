let Pen = document.querySelector("#pen");
let PenSize = document.querySelector("#pen-size");
let PenColor = document.querySelectorAll(".pen-color");
let PenOptions = document.querySelector(".pen-options");
let eraser = document.querySelector("#eraser");
let eraserOption = document.querySelector(".eraser-option");
let eraserSize = document.querySelector("#eraser");
Pen.addEventListener("click" , function(e){
   

    if(PenOptions.classList.contains("hide"))
    {
        PenOptions.classList.remove("hide");
        PenOptions.classList.add("active");
    }

    else
    {
        if(PenOptions.classList.contains("active"))
        {
            PenOptions.classList.remove("active");
            PenOptions.classList.add("hide");
        }

    }
   

});

let PensSizeValue;
let PenSizeColor;
let currentEraserSize;
PenSize.addEventListener("change" , function(){

     PensSizeValue = PenSize.value;
     ctx.lineWidth = PensSizeValue;
    
});

for(let i = 1;i<PenColor.length;i++)
{
    PenColor[i].addEventListener("click" ,  function()
    {
        let Color = PenColor[i].classList[1];
        PenSizeColor = Color;
        ctx.strokeStyle = PenSizeColor;
    })
}


eraser.addEventListener("click" , function(e)
{
    if(eraserOption.classList.contains("hide"))
    {
        eraserOption.classList.add("active");
        eraserOption.classList.remove("hide");
    }
    else
    {
        if(eraserOption.classList.contains("active"))
        {
            eraserOption.classList.remove("active");
            eraserOption.classList.add("hide");
        }
    }
})

eraserSize.addEventListener("change" , function(e)
{
    currentEraserSize = eraserSize.value;
    ctx.lineWidth = currentEraserSize;
    ctx.strokeStyle = "white";
})



