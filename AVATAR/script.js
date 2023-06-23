alert("Olá seja bem-vindo")

let p1=prompt("Digite seu nome");
let p2=prompt("Digite a dominação que gostaria de ter");
let p3=prompt("Digite o nome de um vilão");
let p4=prompt("Digite um lugar");

let msg= document.getElementById('msg')

msg.innerHTML=`<p>Olá ${p1}, o seu tipo de dobra é ${p2} você vai enfrentar o ${p3} em ${p4}`