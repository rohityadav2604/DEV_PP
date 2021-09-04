let allfilter = document.querySelectorAll(".filter");
let ticketcontainer = document.querySelector(".tickets-container");
let openmodal = document.querySelector(".open-modal");
let closemodal = document.querySelector(".close-modal");

for(let i=0;i<allfilter.length;i++)
{
    allfilter[i].addEventListener("click" , selectedfilter);
   
}

openmodal.addEventListener("click" , openticketmodal);
closemodal.addEventListener("click" , closeticket);
let ticketmodalopen = false;
let isTextTyped = false;

function openticketmodal(e)
{

    if(ticketmodalopen)
    {
        return;
    }
     let ticketmodal = document.createElement("div");
     ticketmodal.classList.add("ticket-modal");


     ticketmodal.innerHTML = `<div class="ticket-text" contentEditable ="true">Enter Your Text !</div>
          <div class="ticket-filters">
              <div class="ticket-filter red selected-filter"></div>
              <div class="ticket-filter blue"></div>
               <div class="ticket-filter green"></div>
           </div>
     `;
     //console.log(ticketmodal);
     //document.querySelector("body").append(ticketmodal);
     ticketcontainer.append(ticketmodal);
     ticketmodalopen=true;

     let ticketTextDiv = ticketmodal.querySelector(".ticket-text");
     ticketTextDiv.addEventListener("keypress" , handleKeyPress );

    let ticketFilters = ticketmodal.querySelectorAll(".ticket-filter");
     for(let i=0 ; i<ticketFilters.length ; i++){
      ticketFilters[i].addEventListener("click" , function(e){
          if(e.target.classList.contains("selected-filter")){
              return;
          }
          document.querySelector(".selected-filter").classList.remove("selected-filter");
          e.target.classList.add("selected-filter");
      })
  }
    //  let tickettext = document.createElement("div");
    //  tickettext.classList.add("ticket-text");
    //  let ticketfilter = document.createElement("div");
    //  ticketfilter.classList.add("ticket-filters");
    //  let ticketred = document.createElement("div");
    //  let ticketblue = document.createElement("div");
    //  let ticketgreen = document.createElement("div");
    //  ticketred.classList.add("ticket-filter red");
    //  ticketblue.classList.add("ticket-filter blue");
    //  ticketgreen.classList.add("ticket-filter green");
    //  ticketfilter.append(ticketred);
    //  ticketfilter.append(ticketblue);
    //  ticketfilter.append(ticketgreen);

    //  ticketmodal.append(tickettext);
    //  ticketmodal.append(ticketfilter);




//      <!-- <div class="ticket-modal">
//      <div class="ticket-text"></div>
//      <div class="ticket-filters">
//          <div class="ticket-filter red"></div>
//          <div class="ticket-filter blue"></div>
//          <div class="ticket-filter green"></div>
//      </div>
//  </div> -->

}
function handleKeyPress(e) {
    if(!isTextTyped){
        isTextTyped = true;
        e.target.textContent="";
    } 
  }
function closeticket(e)
{
    if(ticketmodalopen)
    {
        document.querySelector(".ticket-modal").remove();
        ticketmodalopen=false;
    }

}
















function selectedfilter(e)
{
    let filter = e.target.classList[1];
    
     console.log(ticketcontainer);

    if(ticketcontainer.classList.length>1)
    {
        ticketcontainer.classList.remove(ticketcontainer.classList[1]);
    }
    ticketcontainer.classList.add(filter);
    
}







