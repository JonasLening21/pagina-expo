


/* boton arriba*/
window.onscroll = function(){
    if(document.documentElement.scrollTop >100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
}
}
document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
/* NAVBAR*/
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
})

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header');
        if(e.target == span){
            contador=0;
        }
    }
});
/*IDIOMA*/
var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
   let id=check.checked;
   if(id==true){
       location.href="/es/index.html";
   }else{
       location.href="/es/index.html"
   }
}

