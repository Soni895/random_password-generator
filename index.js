let Password_length=document.querySelector("[Password_length]");
let Slider=document.querySelector('[Slider]');
let Check_list=document.querySelectorAll("#Checklist")
let Include_number=document.querySelector("#Numbers");
let Include_sumbols=document.querySelector("#Symbols");
let Include_uppercase=document.querySelector("#Uppercase");
let Include_lowercase=document.querySelector("#Lowercase");
let Generate_password=document.querySelector("[Generate_password]");
let Indicator=document.querySelector("[indicator]");
let Strength=document.querySelector("[Strength]");

let Password="";
let Plength=10;
let Check_count=1;
handleslider();
changecolor("pink");

// handle slider function
// set password length
function handleslider()
{
    Slider.value=Plength;
    Password_length.textContent=Plength;
    
}



// set indicator color


function changecolor(color)
{
    Indicator.style.backgroundColor=color;

}

// get random integer

function getrendomno(min,max)
{
let no=Math.floor(Math.random()*(max-min)+min);
return no;

}
function generaterandomno()
{
    let no=getrendomno(0,9);
}
function generatelowercase()
{

}
function generateuppercase()
{

}
function generatesymbols()
{
    
}


