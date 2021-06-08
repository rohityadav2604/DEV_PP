const pupetter = require('puppeteer');
const email = "hireri5061@frnla.com" ;
const pw = "123456"


let tab;


let browserload = pupetter.launch(
    {   headless:false , 
        defaultViewport:null , 
        args: ["--start-maximized"],
    });

browserload.then(function(browser){
    console.log("browseropened");
    
    return browser.pages();
})  
.then(function(pages)
{
      tab = pages[0];
     return tab.goto("https://www.hackerrank.com/auth/login")
     

})
.then(function()
{
    return tab.type("#input-1" , email);
})
.then(function()
{
    return tab.type("#input-2" , pw);
})
.then(function()
{
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");

})
.then(function(){
    console.log("login succesfully");
})
.then(function()
{
    return waitclick("#base-card-1-link");
})
.then(function()
{
    return waitclick('a[data-attr1 = "warmup"]');
    //return tab.waitForSelector('a[data-attr1 = "warmup"]' , {visible:true});
})
.then(function()
{
    return tab.waitForSelector(".js-track-click.challenge-list-item" , {visible:true});
})
.then(function()
{
    return tab.$$(".js-track-click.challenge-list-item");
})
.then(function(allqueslist)
{
    // console.log(allqueslist);
    let promisearr=[];
    for(let i=0;i<allqueslist.length;i++)
    {
        let oneatag = allqueslist[i];
        
       let pendingpromise = oneatag.evaluate(function(element)
        {
            return element.getAttribute("href");
        } , oneatag);
        promisearr.push(pendingpromise);
    }
    //console.log(promisearr);
    let alllink = Promise.all(promisearr);
    return alllink;

})
.then(function(alllink)
{
    console.log(alllink);
})

.catch(function(error)
{
    console.log(error);
})








function waitclick(selector)
{
    return new Promise(function(scb , fcb)
    {
        let waitpromise = tab.waitForSelector(selector , {visible:true});
        waitpromise.then(function()
        {
            return tab.click(selector);
        })
        .then(function()
        {
            scb();
        })
        .catch(function()
        {
            fcb();
        });
    });
   
}



    
