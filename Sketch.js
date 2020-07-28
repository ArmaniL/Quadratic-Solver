const input=document.getElementsByClassName("equation")[0]
const display=document.getElementsByClassName("results")[0]


input.addEventListener("input",update)

function parse(equation){
let b=0
let c=0
let a=0
const  re=/(-?\d+)x\^2(([+-]\d+)x)?([+-]\d+)?/
const coefficients=equation.trim().match(re)
console.log(coefficients)
 a=parseInt(coefficients[1])
if(coefficients[3]){
 b=parseInt(coefficients[3])
}

if(coefficients[4]){
 c=parseInt(coefficients[4])
}

const g =solve(a,b,c)
console.log(g)
return g 


}

function solve(a,b,c){
const discrim=(Math.pow(b, 2) - (4 * a * c))
if(discrim>0){
const f= ((-1 * b + Math.sqrt(discrim) / (2 * a))).toFixed(2)
const s=((-1 * b - Math.sqrt(discrim) / (2 * a))).toFixed(2)
return{

    first:f,
    second:s

}
}
else if (discrim<0){
    return{ message:'Answer Not real'}
}
else{  
     const f=((-1 * b + Math.sqrt(discrim) / (2 * a))).toFixed(2)
     return {first:f }    }    


}


function update(e){
const answers = parse(e.target.value)
if(answers.message){  display.textContent=answers.message   }
else{
const result=    answers.second===undefined?    "             "+answers.first  :"        "+answers.first+"            "+answers.second+""
display.textContent=result
}
}
