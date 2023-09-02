 function validarValorDoChute(chute){
    const numero = +chute;

    if (Number.isNaN(numero)){

        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        }else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        return;
    }

    if(!validarSeONumeroEstaEntreOsValoresPermitidos(numero))
    {
        elementoChute.innerHTML += `<div>Valor inválido. O número precisa estar entre ${menorValor} e ${maiorValor}`; 
        return;

    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>`
    }
    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
    else if (numero < numeroSecreto){
        
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        ` 
    }
 }
function validarSeONumeroEstaEntreOsValoresPermitidos(numero){
    return numero < maiorValor || numero > menorValor;
}

//funcao para recarregar a pagina assim que clicar em jogar novamente
document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})