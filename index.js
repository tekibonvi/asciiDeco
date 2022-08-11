
const buttonSend = document.getElementById("button-button");


function codesToString(arr){
    return String.fromCharCode(...arr);
}

buttonSend.addEventListener('click',()=>{
const cardResult = document.getElementById("card-result");
const codifiedCode = document.getElementById("ascii-codified");
const codiCode = codifiedCode.value.split(" ");
console.log(codiCode);
const resultado = codesToString(codiCode);
console.log(resultado);


cardResult.style.display = "block";
cardResult.innerHTML= `<p>${resultado}<p>`;


});
