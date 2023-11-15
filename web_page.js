window.onload=function()
{
    var typingInput=document.getElementById("typing-input");
    var typingInput2=document.getElementById("typing-input2");
    var typingInput3=document.getElementById("typing-input3");
    var Input=document.getElementById("cd");
    var Input2=document.getElementById("cd2");
    var Input3=document.getElementById("cd3");
    Input.addEventListener("change",funkcija,false);
    Input2.addEventListener("change",funkcija,false);
    Input3.addEventListener("change",funkcija,false);
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
    }
}