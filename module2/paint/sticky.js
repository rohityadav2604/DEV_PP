let Sticky = document.querySelector("#sticky");

Sticky.addEventListener("click" , function(e)
{
    addsticky();
});


function addsticky(img)
{
    console.log("inside sticky");
    let StickyDiv = document.createElement("div");
    StickyDiv.classList.add("sticky");
    StickyDiv.innerHTML = `<div class="sticky-header">
        <div class="minimize"></div>
        <div class="close"></div>
    </div>`;

    
    let stickyContent;
    if(img)
    {
        let ImageDiv = document.createElement("div");
        ImageDiv.classList.add("sticky-image-div");
        StickyDiv.append(ImageDiv);
        ImageDiv.append(img);
        stickyContent = ImageDiv;
        //console.log(StickyDiv)
    }
    else
    {
        let stickyContentDiv = document.createElement("div");
        stickyContentDiv .classList.add("sticky-content");
        stickyContentDiv.setAttribute("contenteditable" , "true");
        StickyDiv.append(stickyContentDiv);
        stickyContent = stickyContentDiv;

    }

    let Minimize = StickyDiv.querySelector(".minimize");
    //let stickyContent = StickyDiv.querySelector(".sticky-content");
    
    Minimize.addEventListener("click" , function()
    {
        console.log("inside mini");
        stickyContent.style.display == "none"
        ? (stickyContent.style.display = "block")
        : (stickyContent.style.display = "none");     
    });
    
    let Close = StickyDiv.querySelector(".close");
    Close.addEventListener("click" , function(){
        StickyDiv.remove();
    });


    let StickyHeader = StickyDiv.querySelector(".sticky-header")
    StickyHeader.addEventListener("click" , function()
    {
        let StickyHold = false;
        let initialx;
        let initialy;
    
        StickyHeader.addEventListener("mousedown" , function(e){
            StickyHold = true;
            initialx = e.clientX;
            intitialy = e.clientY;
    
    
        });
    
        StickyHeader.addEventListener("mousemove" , function(e){
            if(StickyHold)
            {
                let finalx = e.clientX;
                let finaly = e.clientY;
    
                let dx = finalx-initialx;
                let dy = finaly-initialy;
    
                let {top , left} = StickyDiv.getBoundingClientRect();
    
                StickyDiv.style.left = left+dx + "px";
                StickyDiv.style.top = top + dy +"px";
                
    
                initialx = finalx;
                initialy = finaly
            }
    
    
        })
    
        StickyHeader.addEventListener("mouseup" , function(){
                  StickyHold-false;
        });
        
    });
    document.body.append(StickyDiv)
   
}
