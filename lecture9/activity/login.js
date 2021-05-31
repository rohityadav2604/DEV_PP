const puppetter = require('puppeteer');
const challenges = require("./challenges.js")
const email = "hireri5061@frnla.com";
const pw = "123456";
(async function()
{
    let browser = await puppetter.launch(
        {headless:false , defaultViewport:null , args:["--start-maximized"]});
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1" , email);
    await tab.type("#input-2" , pw);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.goto("https://www.hackerrank.com/administration/challenges");
    await tab.waitForTimeout(2000);
    await tab.goto("https://www.hackerrank.com/administration/challenges/create");
    await tab.waitForTimeout(2000);
    let file = challenges[0];
    await tab.type("#name" , file['Challenge Name']);
    await tab.type("#preview" , file['Description']);
    await tab.type(".CodeMirror-line " ,file['Problem Statement']);
   // await tab.type()




    

})();
