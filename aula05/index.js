let alunos = ["joão", "Maria", "Tonhão"];   //criando array
alunos.push("Bernardo"); //adicionando no fim
alunos.unshift("Wanderson");    //adicionando no começo

let tamanhoArray = alunos.length;   //verificando o tamanho
console.log(`Tamanho do Array: ${tamanhoArray} antes de remover`)
console.log(alunos);

console.log();


alunos.pop()    //removendo o ultimo
alunos.shift()  //removendo o primeiro
tamanhoArray = alunos.length;
console.log(`Tamanho do Array: ${tamanhoArray} depois de remover`)
console.log(alunos);