type Poruke = {[key:string]: string };
let poruke : Poruke = {};
const jezik = document.getElementById("jezik") as HTMLSelectElement;


function postaviJezik(odabraniJezik:string){
if(odabraniJezik === "crnogorski"){
        fetch("cg.json").then((odgovor) => odgovor.json()) .then((prevodi) => { 
            poruke = prevodi;
            podesiPrevode(  ); });
}else{
    fetch("en.json").then((odgovor) => odgovor.json()) .then((prevodi) => { 
        poruke = prevodi;
        podesiPrevode(); });
}
}

function podesiPrevodUHtmlElement(poruke: Poruke, idElementa : string):void{
    const element = document.getElementById(idElementa) as HTMLElement;
if(element){
element.textContent = poruke[idElementa];
}

}

function podesiPrevode(){
    const idNizElemenataZaPrevod = ["naslovDokumenta", "glavniNaslov", "navigacijaStavkaJedan", "navigacijaStavkaDva", "navigacijaStavkaTri", "naslovJedan", "naslovJedanPasusJedan", "naslovDva", "naslovDvaPasusJedan", "naslovDvaJedan", "formaPrijavaInputIme", "formaPrijavaInputEmail", "formaPrijavaInputUrl", "formaPrijavaInputProblem", "formaPrijavaInputFile", "formaPrijavaInputSubmit",  "uspjesnaPrijava", "naslovTri", "naslovTriPasusJedan", "telefon", "kontaktMail", "kontaktFacebook", "kontaktInstagram", "footerPasusJedan"];
    document.title = poruke["naslovDokumenta"];
const formaSubmit = document.getElementById("formaPrijavaInputSubmit") as HTMLFormElement;
    formaSubmit.value = poruke["formaPrijavaInputSubmit"];
idNizElemenataZaPrevod.forEach(id => {
    podesiPrevodUHtmlElement(poruke, id);
    {}}


);
}


function izmjenaJezika(){
    const odabraniJezik = jezik.value;
localStorage.setItem("poslednjiOdabraniJezik", odabraniJezik);
postaviJezik(odabraniJezik);
} 
const  poslednjiOdabraniJezik : string | null = localStorage.getItem("poslednjiOdabraniJezik");
if(poslednjiOdabraniJezik){
jezik.value = poslednjiOdabraniJezik;
}
postaviJezik(poslednjiOdabraniJezik ?? "crnogorski");

jezik.addEventListener("change", izmjenaJezika);