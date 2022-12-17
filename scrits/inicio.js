
  var cerrarL = document.getElementById("closedL");
  var cerrarR = document.getElementById("closedR");
  var formurario = document.getElementById("formulario")
  var sesion=document.getElementById("sesion")
  var registrar= document.getElementById("registrar")
  var registrarse=document.getElementById("registrarse")
  registrar.onclick=function(){
    formurario.style.display="none"
    registrarse.style.display="block"
  }
  sesion.onclick=function(){
    formurario.style.display="block"
  }
  cerrarL.onclick=function(){
    formurario.style.display="none"
  }
  cerrarR.onclick=function(){
    registrarse.style.display="none"
  }
  
  var usuario=document.getElementById("usuario")
var contraseña=document.getElementById("contraseña")
var acceder=document.getElementById("acceder")

acceder.onclick=function(){
  if(contraseña.value=="admin" && usuario.value=="admin"){
    location.href="menuadm.html"
  }else{
    location.href="tienda.html"
  }
}