const screen=document.getElementById('screen');
const zero=document.getElementById('zero');
const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
const six=document.getElementById('six');
const seven=document.getElementById('seven');
const eight=document.getElementById('eight');
const nine=document.getElementById('nine');
const add=document.getElementById('add');
const sub=document.getElementById('sub');
const mul=document.getElementById('mul');
const devide=document.getElementById('devide');
const dot=document.getElementById('dot');
const pow=document.getElementById('pow');
const sin=document.getElementById('sin');
const cos=document.getElementById('cos');
const tan=document.getElementById('tan');
const sec=document.getElementById('sec');
const ln=document.getElementById('ln');
const log10=document.getElementById('log10');
const exp=document.getElementById('exp');
const pi=document.getElementById('pi');

const calc=document.getElementById('calc');



let results=''
one.addEventListener('click',()=>{
    results+=one.value;
    screen.value=results;
})
zero.addEventListener('click',()=>{
    results+=zero.value;
    screen.value=results;
})
two.addEventListener('click',()=>{
    results+=two.value;
    screen.value=results;
})
three.addEventListener('click',()=>{
    results+=three.value;
    screen.value=results;
})
four.addEventListener('click',()=>{
    results+=four.value;
    screen.value=results;
})
five.addEventListener('click',()=>{
    results+=five.value;
    screen.value=results;
})
six.addEventListener('click',()=>{
    results+=six.value;
    screen.value=results;
})
seven.addEventListener('click',()=>{
    results+=seven.value;
    screen.value=results;
})
eight.addEventListener('click',()=>{
    results+=eight.value;
    screen.value=results;
})
nine.addEventListener('click',()=>{
    results+=nine.value;
    screen.value=results;
})
sin.addEventListener('click',()=>{
    let para=+results
    screen.value='';
    screen.value=Math.sin(para).toFixed(4);
})
cos.addEventListener('click',()=>{
    let para=+results
    screen.value='';
    screen.value=Math.cos(para).toFixed(4);
})
tan.addEventListener('click',()=>{
    let para=+results
    screen.value='';
    screen.value=Math.tan(para).toFixed(4);
})
sec.addEventListener('click',()=>{
    let para=+results
    screen.value='';
    screen.value=Math.acos(para).toFixed(4);
})
pi.addEventListener('click',()=>{
    screen.value='';
    screen.value=Math.PI.toFixed(6);
})
ln.addEventListener('click',()=>{
    let para=+results
    screen.value='';
    screen.value=Math.log(para).toFixed(4);
})
log10.addEventListener('click',()=>{
    let para=+results
    screen.value='';
    screen.value=Math.log10(para).toFixed(4);
})

exp.addEventListener('click',()=>{
    let para=+results
    screen.value='';
    screen.value=Math.exp(para).toFixed(4);
})
add.addEventListener('click',()=>{
    results+=add.value;
    screen.value=results;
})
sub.addEventListener('click',()=>{
    results+=sub.value;
    screen.value=results;
})
mul.addEventListener('click',()=>{
    results+=mul.value;
    screen.value=results;
})
devide.addEventListener('click',()=>{
    results+=devide.value;
    screen.value=results;
})
pow.addEventListener('click',()=>{
    results+=pow.value;
    screen.value=results;
})
dot.addEventListener('click',()=>{
    results+=dot.value;
    screen.value=results;
})
sign.addEventListener('click',()=>{
    results+=dot.value;
    screen.value=results;
})
calc.addEventListener('click',()=>{
    let para=[];
    if(results.includes('*')){para=results.split('*')}
    else if (results.includes('+')){para=results.split('+')}
    else if(results.includes('-')){para=results.split('-')}
    else if(results.includes('/')){para=results.split('/')}
    else if(results.includes('^')){para=results.split('^')}
    let leftpara=para[0];
    let rightpara=para[1];
    let sep=results[leftpara.length]
    screen.value='';
    let leftOperand= (+leftpara);
    let rightOperand= (+rightpara);
    if(sep=='+'){ screen.value=leftOperand+rightOperand}
     else if(sep=='-'){screen.value=leftOperand-rightOperand}
    else if(sep=='*'){screen.value=leftOperand*rightOperand}
    else if(sep=='/'){screen.value=leftOperand/rightOperand}
    else if(sep=='^'){screen.value=Math.pow(leftOperand,rightOperand)}
    results=''
    
})