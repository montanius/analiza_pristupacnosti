function saberi(a, b){
let rezultat = a + b;
    console.log("rezultat",rezultat);
    return rezultat;
}


//saberi(2,3);

let brojevi = [1, 2, 3];

function pomnoziSaDva(x){
let rezultat = x * 2;
console.log(rezultat);
    return rezultat;

}
//brojevi.forEach(pomnoziSaDva);

function izracunajRezultat(broj, fn){
fn(broj);

}
izracunajRezultat(10, function(broj){
let rezultat = broj * 3;
console.log(rezultat);
return rezultat;
} );

