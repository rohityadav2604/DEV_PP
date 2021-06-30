let Photo = document.querySelector("#photo");
let FileInput = document.querySelector("#photo-upload");
let downloadDiv = document.querySelector("#download");
Photo.addEventListener("click" , function()
{
      
      FileInput.click();
});

FileInput.addEventListener("change" , function(event)
{
    console.log(event);
    let FileObject = event.target.files[0];
    let filepath = URL.createObjectURL(FileObject);
    let img = document.createElement("img");
    img.setAttribute("src" , filepath);
    img.classList.add("sticky-image");
    addsticky(img);
})



downloadDiv.addEventListener("click" , function(){
    let imagePath = canvas.toDataURL("image/jpg");
    //console.log(imagePath);
    // <a href="" download="canvas.jpg"></a> 
    let aTag = document.createElement("a");
    aTag.download = "canvas.jpg";
    aTag.href = imagePath;
    aTag.click();
})