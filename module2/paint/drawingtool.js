let Pen = document.querySelector("#pen");
let PenSize = document.querySelector("#pen-size");
let PenColor = document.querySelectorAll(".pen-color");

Pen.addEventListener("click" , function(e){
    //Pen.classList.add("active");

});

let PensSizeValue;
let PenSizeColor;
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


