const id = "pamico3332@nic58.com";
const pw = "12345678";
const puppeteer = require("puppeteer");

async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click( ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.waitForTimeout(2000);
    let element = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await element.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li' , {visible:true});
    let bothLis = await tab.$$('.nav-tabs.nav.admin-tabbed-nav li');
    let manageChallengeLi = bothLis[1];
    await manageChallengeLi.click();
    await getallthelink(browser , tab);
};
login();


async function getallthelink(browser , tab)
{
   
    await tab.waitForSelector(".backbone.block-center" , {visible:true});
    let allLinkDiv = await tab.$$(".backbone.block-center");
    let allLink = [];
    for(let i=0;i<allLinkDiv.length;i++)
    {
      let link = await tab.evaluate( function(ele){
          return  ele.getAttribute("href");
          
        } , allLinkDiv[i])
        link = "https://www.hackerrank.com"+link;
        allLink.push(link);
    }

   for(let i=0;i<allLink.length;i++)
   {
       let newtab = await browser.newPage();
       await addmoderator(allLink[i] , newtab);

   }
   let alllis = await tab.$$('.pagination li');
     let nxtbtn = alllis[alllis.length-2];
     let isdisbale = await tab.evaluate(function (ele){
            return ele.classList.contains("disabled");
     } , nxtbtn );
     if(isdisbale)
     {
         return;
     }
     await nxtbtn.click();
     await tab.waitForTimeout(5000);
     await getallthelink(browser , tab);



       




 }

 async function addmoderator(link , newtab)
 {
     await newtab.goto(link);
     await newtab.waitForTimeout(2000);
     await newtab.click('li[data-tab="moderators"]');
     await newtab.waitForTimeout(2000);
     await newtab.type("#moderator" , "kunj");
     await newtab.click(".btn.moderator-save");
     await newtab.click(".save-challenge.btn.btn-green");
     await newtab.close();
     

     





 }
   
      
          
      
   

