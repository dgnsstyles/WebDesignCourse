// alert('el javascript funciona');
/* tipos de Datos:
  Numeros
  Strings
  Arrays
  Objetos */

  // var number1 = '35';
  /* var number2 = '75'; */
  /* alert('mi numero favorito es '+number1); */
  // las únicas elementos que deben estar en una variable son//
  // numeros, letras, guion bajos, y signo $
  // deben empezar con una letra
  // estos son CaseSensitive lo que significa que si leen minúsculas y mayusculas

  /* var numero1 = 42;
  var numero2 = 38;
  console.log('mi numero favorito es '+numero1 + numero2); */
  // Arrays
 // estos estan hechos para guardar grupos de valores

  //var Colores = ['Azul', 'Rojo', 'Verde'];
 /*  var Colores = new Array('Rojo', 'Azul', 'Verde'); */
       
  /* var Numeros = [3, 56, 77, 35]; */
 /* alert(Numeros[0] + Numeros[3]);  */
  /* for( var w = 0; w <= 20; w++){
      console.log(w);
  }
  var w= 0;  */
 /* for(var i = 0; i <= 20; i++){
     console.log(i);
 }  */
/*  var i = 0;
 while(i < 10){
    console.log(i);
    i++;
 } */

 /* var Numeros2 = [65, 33, 68]

 Numeros2.forEach(function(number){
     console.log(number)

 })
  */
 // Condicionales
 /* if(1 == 1){
     console.log('Esto es Cierto recorcholis batman');
 } else{
     console.log('esto es Falso Falso ');
 } */
    // switch
 /*var fruta = 'manzana';
 switch(fruta){
     case 'platano':
     alert('esto es un platano');
     break;
     case 'manzana':
     alert('esto es una manzana');
     break;
     case 'frutilla':
     alert('esto es una frutilla');
     break;
     default: 
     alert('me encantan todas las frutas');
     break;
 } */

 // Objetos Literales

 /* var Person = {
     'PrimerNombre': 'David',
     'SegundoNombre': 'Goren',
     'Edad': 38,
     'niños':['Salomon', 'Johnathan'],
     'direccion': {
         'calle': 'Alonso de Ercilla',
         'numero': '1627-b',
         'departamento': '21'
     },
      nombreCompleto: function(){
          return this.PrimerNombre +''+this.SegundoNombre;
      }
    
     }
 console.log(Person.nombreCompleto); */

 // Objeto Constructor
/* var manzana = new Object();
manzana.color = 'rojo';
manzana.forma = 'redonda';

manzana.describela = function(){
    return 'Esta es una Manzana color' +this.color+' y tiene la forma' +this.forma;
}
console.log(manzana.describela); */

/* function doClick(){
    alert('me presionaste');
}  */
/* 
function changeText(){
    var heading = document.getElementById('heading');
    heading.innerHTML = 'Tu me presionaste';
} */
 function changeBackground(x){
     var body = getElementById('body');
     body.style.backgroundColor = x.value;

     
 }