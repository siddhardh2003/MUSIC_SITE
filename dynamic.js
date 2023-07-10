let button_ele=document.getElementById("signUpId");
let button_ele2=document.getElementById("signUpId2");
let homepageEle=document.getElementById("Spotify_HomePage");
let card=document.getElementById("signUpCard");
let IncPara=document.getElementById("IncPara");
let userInput=document.getElementById("UserNameInput");
let passInput=document.getElementById("PasswordInput");
let signIn_completed=document.getElementById("signInDone");
let closeButton=document.getElementById("closeCard");
let user_passwords={};
button_ele.addEventListener('click',function()
{
    card.classList.remove("d-none");
    homepageEle.classList.add("add-change");
});

button_ele2.addEventListener('click',function()
{
    card.classList.remove("d-none");
    homepageEle.classList.add("add-change");
});

signIn_completed.addEventListener('click',function(){
    if (userInput.value==="" || passInput.value==="")
    {
        IncPara.textContent="*Enter all credentials";
    }
    else if (userInput.value!=="" && passInput.value!=="")
    {
        user_passwords[userInput.value]=passInput.value;
        IncPara.textContent="";
        userInput.value="";
        passInput.value="";
        card.classList.add("d-none");
        homepageEle.classList.remove("add-change");
    }
});

closeButton.addEventListener('click',function(){
    userInput.value="";
    passInput.value="";
    IncPara.textContent="";
    card.classList.add("d-none");
    homepageEle.classList.remove("add-change");
});