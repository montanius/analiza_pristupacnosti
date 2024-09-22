const validirajIme = (inputIme: HTMLInputElement, formaPrijavaInputImeGreska: HTMLParagraphElement, poruke:any):boolean => {
    const inputImeVrijednost = inputIme.value;
        const regexIme = /^[a-zA-Z]+$/;
    if(!inputImeVrijednost){
    formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeObavezno"];  
    formaPrijavaInputImeGreska.style.display = "block";
    return false;
}    
else if(inputImeVrijednost.length > 100){
formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeKarakteri"];
formaPrijavaInputImeGreska.style.display = "block";
return false;
}
else if(!regexIme.test(inputImeVrijednost)){
formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeDozvoljeniZnaci"];
formaPrijavaInputImeGreska.style.display = "block";
return false;
}
else {
        formaPrijavaInputImeGreska.style.display = "none";
                        return true;
}
}    ;
            



const validirajEmail = (inputEmail:HTMLInputElement, formaPrijavaInputEmailGreska:HTMLParagraphElement, poruke:any):boolean => {
const inputEmailVrijednost = inputEmail.value;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!inputEmailVrijednost){
formaPrijavaInputEmailGreska.textContent = poruke["formaPrijavaInputEmailObavezno"];
formaPrijavaInputEmailGreska.style.display = "block";
return false;
}
else if(!regexEmail.test(inputEmailVrijednost)){
formaPrijavaInputEmailGreska.textContent = poruke["formaPrijavaInputEmailDozvoljeniZnaci"];
formaPrijavaInputEmailGreska.style.display = "block";
return false;
}
else{
formaPrijavaInputEmailGreska.style.display = "none";
return true;
}
            };

            
const validirajUrl = (inputUrl:HTMLInputElement, formaPrijavaInputUrlGreska:HTMLParagraphElement, poruke:any):boolean => {
const inputUrlVrijednost = inputUrl.value;
const regexUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w .-]*)*\/?$/i;
if(!inputUrlVrijednost){
formaPrijavaInputUrlGreska.textContent = poruke["formaPrijavaInputUrlObavezno"];
formaPrijavaInputUrlGreska.style.display = "block";
return false;
}
else if(!regexUrl.test(inputUrlVrijednost)){
formaPrijavaInputUrlGreska.textContent = poruke["formaPrijavaInputUrlDozvoljeniZnaci"];
formaPrijavaInputUrlGreska.style.display = "block";
return false;
}
else{
formaPrijavaInputUrlGreska.style.display = "none";
return true;
}
};

const validirajProblem = (inputProblem:HTMLInputElement, formaPrijavaInputProblemGreska:HTMLParagraphElement, poruke:any):boolean => {
const inputProblemVrijednost = inputProblem.value;
if(!inputProblemVrijednost){
formaPrijavaInputProblemGreska.textContent = poruke["formaPrijavaInputProblemObavezno"];
formaPrijavaInputProblemGreska.style.display = "block";
return false;
}
else{
formaPrijavaInputProblemGreska.style.display = "none";
return true;
}
}


