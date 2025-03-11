// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos donde guardaremos cada nombre de amigo
let amigo = []

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreamigo = inputAmigo.value; 
    if (!nombreamigo){
        alert("Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreamigo);
    console.log(nombreamigo);
    inputAmigo.value="";
    inputAmigo.focus;
    renderizarAmigos();
}

function renderizarAmigos(){

    let ListaAmigos = document.getElementById("listaAmigos");
    ListaAmigos.innerHTML="";

    for(let i=0; i< amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        ListaAmigos.appendChild(item);
    }

}

function sortearAmigo(){
    if(amigo.length === 0){
        alert("no hay amigos para sortear");
        return;
    }

let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML=`Tu amigo sorteado es : ${amigoSorteado}`;

let limpiarLista = document.getElementById("listaAmigos")
limpiarLista.innerHTML ="";

}