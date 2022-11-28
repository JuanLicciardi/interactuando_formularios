
const $getId = (elemento) =>  document.getElementById(elemento)
    

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

    let errores = {}    
    const elementForm = $getId('form').elements

    $getId('title').focus()

    $getId('title').addEventListener('blur', function(){
        if($getId('title').value.length < 1){
            errores.title = "El nombre es requerido"
            $getId('title').classList.add('is-invalid')
            console.log('estamos saliendo 1')
        }
    })

    $getId('rating').addEventListener('blur', function(){
        if($getId('rating').value.length < 1){
            errores.rating = "El rating es requerido"
            $getId('rating').classList.add('is-invalid')
            console.log('estamos saliendo 2')
        }else if($getId('rating').value <0 || $getId('rating').value >10 ) {
            console.log('estamos saliendo 2 bis')
            $getId('rating').classList.remove('is-valid')
            $getId('rating').classList.add('is-invalid')
            errores.rating = "Debe ingresar valor entre 0 y 10"
        }else{
            $getId('rating').classList.remove('is-invalid')
            $getId('rating').classList.add('is-valid')
            console.log('estamos saliendo 2 pero bien')
        } 
    })


    $getId('awards').addEventListener('blur', function(){
        if($getId('awards').value.length < 1){
            errores.awards = "El awards es requerido"
            $getId('awards').classList.add('is-invalid')
            console.log('estamos saliendo 3')
        }else if($getId('awards').value <0 || $getId('awards').value >10 ) {
            console.log('estamos saliendo 3 bis')
            $getId('awards').classList.remove('is-valid')
            $getId('awards').classList.add('is-invalid')
            errores.awards = "Debe ingresar valor entre 0 y 10"
        }else{
            $getId('awards').classList.remove('is-invalid')
            $getId('awards').classList.add('is-valid')
            console.log('estamos saliendo 3 pero bien')
        } 
    })
    
    $getId('release_date').addEventListener('blur', function(){
        if($getId('release_date').value.length < 1){
            errores.release_date = "El release_date es requerido"
            $getId('release_date').classList.add('is-invalid')
            console.log('estamos saliendo 4')
        }
    })

    $getId('length').addEventListener('blur', function(){
        if($getId('length').value.length < 1){
            errores.length = "El length es requerido"
            $getId('length').classList.add('is-invalid')
            console.log('estamos saliendo 5')
        }else if($getId('length').value <60 || $getId('length').value >360 ) {
            console.log('estamos saliendo 5 bis')
            $getId('length').classList.remove('is-valid')
            $getId('length').classList.add('is-invalid')
            errores.length = "Debe ingresar valor entre 60 y 360"
        }else{
            $getId('length').classList.remove('is-invalid')
            $getId('length').classList.add('is-valid')
            console.log('estamos saliendo 5 pero bien')
        } 
    })
    
    
    $getId('genre_id').addEventListener('blur', function(){
        if($getId('genre_id').value.length < 1){
            errores.length = "El gernero es requerido"
            $getId('genre_id').classList.add('is-invalid')
            console.log('estamos saliendo 6')
        }
    })
    
    if(Object.keys(errores).length >= 1){
            console.log('tenemos errores')
        } else{
            console.log('no hay errores')
    } 


    $getId('botonAgregar').addEventListener('click', function(event){
        event.preventDefault()
       for (i=0; i < elementForm.length-1; i++ ){
            if (!elementForm[i].value){
                elementForm[i].classList.add('is-invalid')
            } else {
                elementForm[i].classList.add('is-valid')
            }
       }
    })
}