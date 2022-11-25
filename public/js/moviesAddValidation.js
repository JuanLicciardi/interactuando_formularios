
const $Captura = (elemento) =>  document.getElementById(elemento)
    

window.onload = function(){
    console.log("estamos llegando")

    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    
    $Captura('title').focus()

    let vacio = $Captura(title).addEventListener('blur', function() {
        if ($Captura(title).value == 0){
        console.log("Aca tambien llega")}
    }) 

    
    


}