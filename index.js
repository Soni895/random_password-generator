let Password_length=document.querySelector("[Password_length]");
let Slider=document.querySelector('[Slider]');
let Check_list=document.querySelector("#Checklist");
let Item=Check_list.querySelectorAll('input');
let Include_number=document.querySelector("#Numbers");
let Include_sumbols=document.querySelector("#Symbols");
let Include_uppercase=document.querySelector("#Uppercase");
let Include_lowercase=document.querySelector("#Lowercase");
let Generate_password=document.querySelector("[Generate_password]");
let Indicator=document.querySelector("[indicator]");
let Strength=document.querySelector("[Strength]");
let Symbole="~!@#$%^&*()_+-=*/{}:.<>?,./;'[]'|";
let Password_display=document.querySelector("[password_display");
let Copy_text=document.querySelector(".copy_text");
let Copy_icon=document.querySelector("[Copy_icon]");

let Password="";
let Plength=10;
handleslider();

// handle slider function
// set password length
function handleslider()
{
    Slider.value=Plength;
    Password_length.textContent=Plength;
    
}

// set indicator color


function changecolor()
{
    let strength=calculatestrength();
    if(strength=="weak")
    {
        Indicator.style.backgroundColor="red";
    }
    else
    if(strength=="strong")
    {
        Indicator.style.backgroundColor="green";
    }
    else{
        Indicator.style.backgroundColor="yellow";

    }
   

}

function calculatestrength()
{
   let upper=0,lower=0,number=0,symbole=0;
   if(Include_lowercase.Checked)lower=1;
   if(Include_uppercase.Checked)upper=1;
   if(Include_sumbols.Checked)symbol=1;
   if(Include_number.Checked)number=1;

   if(upper&&lower&&symbole&&number){
    return "strong";

   }
   else if((upper&&lower&&symbole)||(upper&&lower&&number)||(upper&&symbole&&number)||(symbole&&lower&&number))
   {
    return "strong";
   }
   else
   if((upper&&lower)||(upper&&number)||(upper&&symbole))
   {
    return "medium";
   }
   else
   if((number&&lower)||(symbole&&number))
   {
    return "medium";
   }
   else
   if((number&&symbole))
   {
    return "medium";
   }
   else{
    return "weak";
   }
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
    return no;
}
function generatelowercase()
{
    let no=getrendomno(97,123);
    let char = String.fromCharCode(no);
    return char;
}
function generateuppercase()
{
    let no=getrendomno(65,91);
    let char = String.fromCharCode(no);
    return char;
}
function generatesymbols()
{

let no=generaterandomno(0,(Symbole.length));
return Symbole[no];

}

// copy content
 async function copycontent()
{
    try{
    await navigator.clipboard.writeText(Password_display);
    Copy_text.innerHTML="copyed";

    }

    catch(e)
    {
        console.log("Try again");
    }

    Copy_text.classList.add("active");
    setTimeout(() => {
        Copy_text.classList.remove("active");
        // Copy_text.textContent="";
        
    }, 2000);

}
// create password 

// add event listner to slider

Slider.addEventListener('input',event=>
{
    Plength=Slider.value;
    handleslider();

} );
Copy_icon.addEventListener("click",()=>{
    if(Password_display.value)
    {
        copycontent();
    }

});

// check box count

// add addEventListener on checkbox

Item.forEach(check_box=>{
    check_box.addEventListener('change',box_count);
})


function box_count()
{
    Check_count=0;
   for(let i=0;i<Item.length;i++)
    {
        if(Item[i].checked)
        {
            Check_count++;
            

        }
        if(Check_count>Plength)
    {
        Plength=Check_count;
        handleslider();
    }
    }

}

  





// generate Password
Generate_password.addEventListener("click",event=>{
});




// let content=generatesymbols();
// console.log(content);
calculatestrength("91345");
// console.log(calculatestrength());
// changecolor();
