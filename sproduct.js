window.onload=function()
{
    var typingInput=document.getElementById("typing-input");
    var typingInput2=document.getElementById("typing-input2");
    var typingInput3=document.getElementById("typing-input3");
    var typingInput4=document.getElementById("typing-input4");
    var typingInput5=document.getElementById("typing-input5");
    var typingInput6=document.getElementById("typing-input6");
    var typingInput7=document.getElementById("typing-input7");
    var typingInput8=document.getElementById("typing-input8");
    var typingInput9=document.getElementById("typing-input9");
    var add=document.getElementById("add");
    add.addEventListener("click",goTo,false);
    function goTo()
    {
        window.location.href="#contacts";
    }
    var Input=document.getElementById("cd");
    var Input2=document.getElementById("cd2");
    var Input3=document.getElementById("cd3");
    var Input4=document.getElementById("cd4");
    var Input5=document.getElementById("cd5");
    var Input6=document.getElementById("cd6");
    var Input7=document.getElementById("cd7");
    var Input8=document.getElementById("cd8");
    var Input9=document.getElementById("cd9");
    Input.addEventListener("change",funkcija,false);
    Input2.addEventListener("change",funkcija,false);
    Input3.addEventListener("change",funkcija,false);
    Input4.addEventListener("change",funkcija,false);
    Input5.addEventListener("change",funkcija,false);
    Input6.addEventListener("change",funkcija,false);
    Input7.addEventListener("change",funkcija,false);
    Input8.addEventListener("change",funkcija,false);
    Input9.addEventListener("change",funkcija,false);
    function funkcija()
    {
        if(Input.value)
        {
            typingInput.className="novaKlasa";
        }
        if(Input2.value)
        {
            typingInput2.className="novaKlasa";
        }
        if(Input3.value)
        {
            typingInput3.className="novaKlasa";
        }
        if(Input4.value)
        {
            typingInput4.className="novaKlasa";
        }
        if(Input5.value)
        {
            typingInput5.className="novaKlasa";
        }
        if(Input6.value)
        {
            typingInput6.className="novaKlasa";
        }
        if(Input7.value)
        {
            typingInput7.className="novaKlasa";
        }
        if(Input8.value)
        {
            typingInput8.className="novaKlasa";
        }
        if(Input9.value)
        {
            typingInput9.className="novaKlasa";
        }
    }
}