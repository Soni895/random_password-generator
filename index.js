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

// handle slider function
// set password length
function handleslider()
{
    Slider.value=Plength;
    Password_length.textContent=Plength;
    
}




