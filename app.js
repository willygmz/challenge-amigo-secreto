// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos donde guardaremos cada nombre de amigo

let amigosecreto = [] //  array de amigos
let resultado = document.getElementById("resultado"); //resultado del sorteo
let inputAmigo = document.getElementById("amigo"); //input para agregar amigos
let ListaAmigos = document.getElementById("listaAmigos"); //lista de amigos

//funcion para agregar amigos
function agregarAmigo() {
//si ya se ha generado el amigo secreto, no se puede agregar mas amigos
    if (resultado.innerHTML !== "") {
        alert("Ya se ha generado el amigo secreto.");
        reiniciarSorteo();
        return;
    }
//si no se ha ingresado un nombre, se muestra un alerta
    let nombreamigo = inputAmigo.value;
    if (!nombreamigo) {
        alert("Debes ingresar un nombre");
        return;
    }
    //se agrega el nombre del amigo al array de amigos
    amigosecreto.push(nombreamigo);
    console.log(nombreamigo);
    inputAmigo.value = "";
    inputAmigo.focus;
    renderizarAmigos();
}

//funcion para renderizar amigos
function renderizarAmigos() {

    ListaAmigos.innerHTML = "";

    for (let i = 0; i < amigosecreto.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigosecreto[i];
        item.textContent = (i + 1) + ". " + amigosecreto[i];
        ListaAmigos.appendChild(item);
    }
}


//funcion para sortear amigo secreto
    function sortearAmigo() {
        //si ya se ha realizado el sorteo, no se puede realizar de nuevo
        if (resultado.innerHTML !== "") {
            alert("Ya se ha realizado el sorteo");
            reiniciarSorteo();
            return;
        }
        //si no hay amigos en el array, se muestra un alerta
        if (amigosecreto.length === 0) {
            alert("No hay amigos para sortear");
            resultado.innerHTML = "";
            return;
        }
//se sortea un amigo secreto
        let amigoSorteado = amigosecreto[Math.floor(Math.random() * amigosecreto.length)];
        resultado.innerHTML = `Felicitaciones Tu amigo sorteado es : ${amigoSorteado} !`;

    }


    
//funcion para reiniciar el sorteo
function reiniciarSorteo() {
    condicionesIniciales();
}

function condicionesIniciales() {
    inputAmigo.focus();
    amigosecreto = [];
    resultado.innerHTML = "";
    ListaAmigos.innerHTML = "";
    inputAmigo.value = "";
}