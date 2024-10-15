import { validirajDaNijePrazno, validirajMaksimalnuDuzinu, validirajIme, validirajEmail, validirajUrl } from "./validator.js";

function testirajValidirajDaNijePrazno() {
    var tekstovi = {
        "nekiTekst" :"neki tekst",
        "prazanString" : "",
        "razmak" : " ",
"noviRed" :         "\n",
        "tab" : "\t"
    };
for(let key in tekstovi){
    try{
    var nijePrazno = validirajDaNijePrazno(tekstovi[key]);
    if (!nijePrazno) {
        //console.log(key + " nije prošao test ");
throw new Error(key + " nije prošao test.");
    }
}
catch(error){
    console.log(error.message);
    }
    };
    }console.log("Testiranje funkcije validirajDaNijePrazno");

    //try{
testirajValidirajDaNijePrazno();
//}
/*catch(error){
    console.log(error.message);
}*/

function testirajValidirajMaksimalnuDuzinu(){
    const brojKaraktera = {
    "tekstOdStoKaraktera": "a".repeat(100),
    "tekstOdStoJedanKarakter"  : "a".repeat(101)
    }
     for(let text in brojKaraktera){
var textDozvoljenaDuzina = validirajMaksimalnuDuzinu(brojKaraktera[text], 100);
if(!textDozvoljenaDuzina){
console.log("Upisani tekst: "+ text + " ima "+ brojKaraktera[text].length +" karaktera što je nedozvoljen broj karaktera.");
}
 };
}
console.log("Testiranje funkcije testirajValidirajMaksimalnuDuzinu");
testirajValidirajMaksimalnuDuzinu();

function testirajValidirajIme() {
    var imena = [
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
    imena.forEach(function (ime) {
        var imeValidno = validirajIme(ime);
        if (!imeValidno) {
            console.log("ime: ", ime, "nije prošlo test.");
        }
    });
}
console.log("Testiranje funkcije testirajValidirajIme");
testirajValidirajIme();

function testirajValidirajEmail(){
 var emailovi = [
    "john.doe@example.com",
"user123@domain.org",
"first.last+alias@domain.co.uk",
"name@sub.domain.com",
"alice_bob@example-mail.com",
"john.doe@ example.com",
"user@domain..com",
"user@domain",
"@domain.com",
"user@domain,com",
"user@.com",
"user@domain.c"
 ];   
 emailovi.forEach((email) => {
var emailValidan = validirajEmail(email);
if(!emailValidan){
console.log("unešeni email: " + email + "nije validan.");
}
 });
}
console.log("Testiranje funkcije testirajValidirajEmail");
testirajValidirajEmail();

function testirajValidirajUrl(){
    var urls = [
        "http://example.com",
"https://www.example.com",
"www.example.com",
"https://sub.example.com/path/to/page",
"https://example.co.uk",
"http://example.com/folder/file.html",
"http://example.com/some-file.txt",
"example.com",
"https://example.com/",
"https://example.com/index.php?id=123",
"http://example",
"example..com",
"http://.com",
"htp://example.com",
"http://example,com",
"example",
"http:// example.com",
"http://example.com/ /page",
"http://-example.com",
"http://example.com."
    ];
    urls.forEach((url) => {
var urlValidan = validirajUrl(url);
if(!urlValidan){
console.log("Upisana url adresa: " + url + " nije ispravna.");
}
});
}
console.log("Testiranje funkcije testirajValidirajUrl");
testirajValidirajUrl();