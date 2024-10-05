import { validirajDaNijePrazno, validirajMaksimalnuDuzinu, validirajIme, validirajEmail, validirajUrl } from "./validator.js";

function testirajValidirajDaNijePrazno() {
    var tekstovi = [
        "neki tekst",
        ""
    ];
    tekstovi.forEach((tekst) => {
    var nijePrazno = validirajDaNijePrazno(tekst);
    if (nijePrazno) {
        console.log("U input Polje je upisan: " + tekst);
    }
    });
}
testirajValidirajDaNijePrazno();

function testirajValidirajMaksimalnuDuzinu(){
 var imena  = [
    "neko ime",
    "Ana-Maria-Johannes-Smith-O’Connor-Julio-César-González-de-la-Rosa-Fernández-Pérez-de-San-Juan-Paloma-Montenegro-Duquesa-de-Alba"
 ];
 imena.forEach((ime) => {
var imeDozvoljenaDuzina = validirajMaksimalnuDuzinu(ime, 100);
if(!imeDozvoljenaDuzina){
console.log("Upisano ime:"+ ime + " ima "+ ime.length +" karaktera što je nedozvoljen broj karaktera.");
}
 });
}
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
testirajValidirajUrl();