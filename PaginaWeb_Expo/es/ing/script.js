


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
/*IDIOMA*/
var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
   let id=check.checked;
   if(id==true){
       location.href="../es/index.html";
   }else{
       location.href="../ing/index.html"
   }
}
