//Function === f(x)= (x^2 + 9x + 20) / (x + 4)
let x;
let x2;
let xInt;
let Va;
let Ha;
let Hole;
let Hole1;
let Hole2;
let Domain;
let Range;
let numerator = 'x + 9 x + 4';
let denominator = 'x + 4';
let ratFunction = numerator + "/" + denominator;

simplify(numerator, denominator);
xInt2(numerator);
vertAsym(denominator);
horiAsym(numerator, denominator);
hole();
domainNrange();
list();

function list(){
    console.log("X-Int: " + xInt);
    console.log("Vert. Asymptote: " + Va);
    console.log("Horiz. Asymptote: " + Ha);
    console.log("Hole: " + Hole);
    console.log("Domain: " + Domain);
    console.log("Range: " + Range);
}

function simplify(p, q){
    if(p.substring(0, p.length) == 'x^2'){
        p = '(x + 5)(x + 4)';
    }
    let pDivq = p + '/' + q;
}

function xInt2(p){
    p = '(x = -5) & (x = -4)';
    xInt = '(-5, -4)';
    x = -5;
    x2 = -4;
}

function vertAsym(q){
    q = 'x + 4 = 0';
    q = 'x = -4';
    Va = q;
}

function horiAsym(p, q){
    if(p > q){
        Ha = "None";
    }
    if( p < q){
        Ha = 'y=0';
    }
    if(p === q){
        Ha = p.substring(0, 3) + "/" + q.substring(0);
        Ha = '1/1';
    }
}

function hole(){
    Hole1 = '(x + 5)(x + 4) / (x + 4)';
    Hole1 = '(x + 5) / 1';
    Hole1 = (x + 5) / 1;
    Hole2 = (x2 + 5) / 1;
    if((Hole1 === 0) && (Hole2 !== 0)){
        Hole1 = "";
        Hole = Hole2;
    }else{
        Hole2 = "";
        Hole = Hole1;
    }
}

function domainNrange(){
    Domain = '{x|x not = (5, 4)}';
    Range = '{y|y not = (' + Va + ')}';
}
