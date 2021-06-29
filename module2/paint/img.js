let Photo = document.querySelector("#photo");
let FileInput = document.querySelector("#photo-upload");

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