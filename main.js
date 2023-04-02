// numeroSecreto = Math.floor(Math.random() * 30 + 1);
//var cor = "Azul";
// let cor = "Azul";
// let Cor = "red";
// let numero = '5';

// let arrayNum = ["gato","cachorro","morcego","Urubu","Baleia","peixe"]

// function display(ar) {
//     return console.log(ar)
// }

// let exmeploArray = {
//     cor,
//     Cor,
//     numero,
// };

// let ir = `Minha cor ${cor} Outra Cor ${Cor} Meu Numero Secreto ${numeroSecreto}`;
// arrayNum.push('Cobra')
// arrayNum.pop();
// display(ir)
// display(arrayNum.includes('gato'))
// display(arrayNum)

// let removed = arrayNum.splice(0, 1 )
// display(arrayNum)
// let myFish = ["angel", "clown", "mandarin", "surgeon"];
// let removed = myFish.splice(0, 1);

// console.log(myFish);

// let arrayUsuarios = [];
// let dadosUsuario = {};

// dadosUsuario.nome = window.prompt("Novo Usuario");
// dadosUsuario.sobrenome = window.prompt("Sobrenome ");
// dadosUsuario.comida = window.prompt("Comida ");
// arrayUsuarios.push(dadosUsuario);

// console.log(arrayUsuarios);

const bugDoMilenio = 2000;
const anoAtual = 2023;



function verificarIdade(){
    const mostrarMensagem = document.querySelector('#mostrarMensagem');
    const inputIdade = document.querySelector('#_idade');
    mostrarMensagem.textContent = "";

    let convertIdade = parseInt(inputIdade.value);
    if (convertIdade >= 65){
        mostrarMensagem.textContent = "Você Já Pode se Aposentar"
        // console.log("Clique!",typeof convertIdade);
    }

    let verficarAno = anoAtual - convertIdade;

    if ( verficarAno === bugDoMilenio) {
        mostrarMensagem.textContent = "Você Nasceu no Ano do Bug do Milênio";
    }

    // console.log(verficarAno, bugDoMilenio)

    inputIdade.value = '';
}
