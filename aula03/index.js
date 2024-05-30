const nome = prompt("Digite Seu nome completo: ");
document.body.innerHTML = `Seu nome é: ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br/>`;
document.body.innerHTML += `Qual é o primeiro indice da letra "a" no seu nome? ${nome.indexOf("a")} <br/>`;
document.body.innerHTML += `Qual é o ultimo indice da letra "a" no seu nome? ${nome.lastIndexOf("a")} <br/>`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toLowerCase()}`;