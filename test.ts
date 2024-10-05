import{ validirajIme, validirajDaNijePrazno }  from "./validator";

function testirajValidirajIme(){
const imena : string[] = [
"Ana",
"Jean-Pierre",
"O'Connor",
"María",
"Đorđe",
"Łukasz",
"Chloé",
"D’Angelo",
"John123",
"Marie!",
"Alice ",
"John-Doe-",
""
];
imena.forEach((ime) => {
const imeValidno = validirajIme(ime);
if(!imeValidno){
console.log("ime: ", ime, "nije prošlo test.");
}
});

}
testirajValidirajIme();

function testirajValidirajDaNijePrazno(){
 const nijePrazno = validirajDaNijePrazno("");
 if(nijePrazno){
    console.log("U input polju  nije upisan tekst");
 }
}