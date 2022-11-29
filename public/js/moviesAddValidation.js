
const $getId = (elemento) =>  document.getElementById(elemento)


window.onload = async function(){
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
                                                                    //Ok
    $getId('title').addEventListener('blur', function(){
        if(this.value.length < 1){
            errores.title = "El nombre es requerido"
            this.classList.add('is-invalid')
            $getId('msg_title').innerHTML = errores.title
        }else{
            delete errores['title']
            $getId('msg_title').innerHTML = ""
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        } 
    })
                                                                    //Ok
    $getId('rating').addEventListener('blur', function(){
        if(this.value.length < 1){
            errores.rating = "El rating es requerido"
            this.classList.add('is-invalid')
            $getId('msg_rating').innerHTML = errores.rating
        }else if(this.value <0 || this.value >10 ) {
            errores.rating = "Debe ingresar valor entre 0 y 10"
            $getId('msg_rating').innerHTML = errores.rating
            this.classList.add('is-invalid')
        }else{
            delete errores['rating']
            $getId('msg_rating').innerHTML = ""
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        } 
    })

                                                                    //Ok
    $getId('awards').addEventListener('blur', function(){
        if(this.value.length < 1){
            errores.awards = "El awards es requerido"
            this.classList.add('is-invalid')
            $getId('msg_awards').innerHTML = errores.awards
        }else if(this.value <0 || this.value >10 ) {
            errores.awards = "Debe ingresar valor entre 0 y 10"
            $getId('msg_awards').innerHTML = errores.awards
            this.classList.add('is-invalid')
        }else{
            delete errores['awards']
            $getId('msg_awards').innerHTML = ""
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        } 
    })

                                                                    //Ok
    $getId('release_date').addEventListener('blur', function(){
        if(this.value.length < 1){
            errores.release_date = "El release_date es requerido"
            this.classList.add('is-invalid')
            $getId('msg_release_date').innerHTML = errores.release_date
        }else{
            delete errores['release_date']
            $getId('msg_release_date').innerHTML = ""
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        }
    })
                                                                    //Ok
    $getId('length').addEventListener('blur', function(){
        if(this.value.length < 1){
            errores.length = "El length es requerido"
            this.classList.add('is-invalid')
            $getId('msg_length').innerHTML = errores.length
        }else if(this.value <60 || this.value >360 ) {
            errores.length = "Debe ingresar valor entre 60 y 360"
            $getId('msg_length').innerHTML = errores.length            
            this.classList.add('is-invalid')
        }else{
            delete errores['length']
            $getId('msg_length').innerHTML = ""
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        } 
    })
                                                                    //Ok
    $getId('genre_id').addEventListener('blur', function(){
        if(this.value.length < 1){
            errores.genre_id = "El gernero es requerido"
            this.classList.add('is-invalid')
            $getId('msg_genre_id').innerHTML = errores.genre_id
        }else{
            delete errores['genre_id']
            $getId('msg_genre_id').innerHTML = ""
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        }
    })
    
    
     $getId('botonAgregar').addEventListener('click', function(event){
        event.preventDefault()
       for (i=0; i < elementForm.length-1; i++ ){
            if (!elementForm[i].value){
                elementForm[i].classList.add('is-invalid')
                switch (i) {
                    case 0:
                        errores.title = "El nombre es requerido"
                        $getId('msg_title').innerHTML = errores.title
                        $getId('msg_title').classList.add('is-invalid')
                        break;
                    case 1:
                        errores.rating = "El rating es requerido"
                        $getId('msg_rating').innerHTML = errores.rating
                        $getId('msg_rating').classList.add('is-invalid')
                        break;
                    case 2:
                        errores.awards = "El award es requerido"
                        $getId('msg_awards').innerHTML = errores.awards
                        $getId('msg_awards').classList.add('is-invalid')
                        break;
                    case 3:
                        errores.release_date = "El release date es requerido"
                        $getId('msg_release_date').innerHTML = errores.release_date
                        $getId('msg_release_date').classList.add('is-invalid')
                        break;
                    case 4:
                        errores.length = "El length es requerido"
                        $getId('msg_length').innerHTML = errores.length
                        $getId('msg_length').classList.add('is-invalid')
                        break;
                    default:
                        errores.genre_id = "El genero es requerido"
                        $getId('msg_genre_id').innerHTML = errores.genre_id
                        $getId('msg_genre_id').classList.add('is-invalid')
                    break;
                }
            }else{
                elementForm[i].classList.add('is-valid')
            }
       }

       if(Object.keys(errores).length < 1){
        console.log('no tenemos errores')
        $getId('form').submit()
       } else{
        console.log(errores)        
        console.log('hay errores')
} 

    }) 
}