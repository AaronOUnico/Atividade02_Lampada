function acender(){
    let x = document.getElementById("estado")
    x.src = "./imagens/lampadcesa.png"
    let title = document.getElementById("mess")
    console.log(title.textContent);
    title.textContent = "Lampaaron aceso!";
}
function apagar(){
    let x = document.getElementById("estado")
    x.src ="./imagens/lampadvdd.png"
    let title = document.getElementById("mess")
    console.log(title.textContent)
    title.textContent = "Lampaaron apagado!"
}