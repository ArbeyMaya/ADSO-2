//console.log("Analisis y Desarrollo de Software");

//alert("Analisis y Desarrollo de Software");

//para comentar en una linea de codigo 

/* este tipo de comentario
se trabaja en diferentes 
lineas de codigo*/

//document.write("Analisis y Desarrollo de Software");

//declarar bariables var

//var edad=33;
//const nom="Arbey";
//let num=2.5;
//booleano='ADSO';

/* unir dos cadenas de texto
const nom="Arbey"
const ape='Maya'
alert("mi nombre es "+nom+" y mi apellido es "+ape) */

/* operadores aritmeticos +,-,*,/
const num1=5
const num2=3
const div = num1/num2
alert("la division es: "+div) */

/*
let nom=prompt("escriba el nombre")
let ape=prompt("escriba su apellido")
let edad=prompt("escriba su edad")
let peso=prompt("escriba su peso")
let direccion=prompt("escriba su direccion")
alert(" mi nombre es: "+nom+ " Mi apellido es: "+ape+ " Mi edad es: "+edad+ " Mi peso es: "+peso+ " Mi dirección es: "+direccion ) */

/*mostrar una alerta con los nombres y apellidos   
completos, edad, peso y direccion*/

//console.log(typeof booleano); typeof es para definir el tipo de dato

//console.log("mi edad es: "+edad);
//alert("mi edad es: "+edad);
//document.write("mi edad es: "+edad)
//simbolo "+" sirve para concatenar

//const edad2=22;

//let edad3=33;


/* -ACTIVIDAD 1
Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra. */

/*const val = prompt ("Ingrese el valor de su compra") ;
const descuento = 25/100 ;
const multi = parseInt(val * descuento) ;
const totalDes = parseInt(val) - parseInt(multi) ;
alert("El valor de su compora es:  "+totalDes) ; */


/* -ACTIVIDAD 2
Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual. */

/* const capital = prompt ("Capital") ;
const interes = 2/100 ;
const multi = parseInt(capital * interes) ;
const totalCap = parseInt(capital) + parseInt(multi) ;
alert("Su capital es de:  "+totalCap) ; */


/* -ACTIVIDAD 3
Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final. */

/*
let parcial1 = prompt ("Ingrese la nota de su primer parcial 1: ") ;
let parcial2 = prompt ("Ingrese la nota de su segundo parcial 2: ") ;
let parcial3 = prompt ("Ingrese la nota de su tercer parcial parcial 3: ") ;
let examenfinal = prompt ("calificacion examen final: ") ;
let trabajofinal = prompt ("cslificacion trabajo fianl: ") ;

let porcenParciales = 55/100 ;
let porcenExamenFinal = 30/100 ;
let porcenTrabajoFinal = 15/100 ;

let promParciales = parseInt(parcial1 + parcial2 + parcial3) ;
let calificacionFinal = parseInt(promParciales * porcenParciales) + parseInt(examenfinal * porcenExamenFinal) + parseInt(trabajofinal * porcenTrabajoFinal);

alert("la calificacion final es: "+calificacionFinal) ; */


/* ACTIVIDAD 4
El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30% */

/* const articulo = prompt ("Ingrese el valor de su articulo que desea vender") ;
const porcentaje = 30/100 ;
const multi = parseInt(articulo * porcentaje) ;
const total = parseInt(articulo) + parseInt(multi) ;
alert("Total + 30%: "+total) ; */


/* ACTIVIDAD 5
Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera. */

/*
let distancia = prompt("cuantos Km recorrio el taxi") ;
let tiempo = prompt("En cuento tiempo recorre la carrera") ;
let tiempoPorKm = 15000 ;
let tiempoPorMin = 2000 ;
let monto = parseInt(distancia * tiempoPorKm) + parseInt( tiempo * tiempoPorMin) ;
alert("El monto a pagar por la carrera es de: "+ monto) ;
*/

/* ACTIVIDAD 6
Realizara un programa en el cual se van a leer tres numeros y determiar el 
cuadrado de cada uno de ellops */

/*
let num1 = prompt("Indique el numero") ;
let num2 = prompt("Indique el numero") ;
let num3 = prompt("Indique el numero") ;

let cuadrado1 = parseInt(num1 * num1) ;
let cuadrado2 = parseInt(num2 + num2) ;
let cuadrado3 = parseInt(num3 * num3) ;

alert("El cuadrado del primer numero es el: "+ cuadrado1 + ", El cuadrado del segundo numero es el: " + cuadrado2 + "El cuadrado del tercer numero es: " + cuadrado3) ;
*/

/* ACTIVIDAD 7
En un hospital existen tres areas: ginecologia, pediatria, traumatologia.
El presupuesto anual del hospital se reparte conforme a la siguiente tabla:

ginecologia: 40%
Traumatologia: 30%
pediatria: 30%

Obtener la cantidad de dinero que recibira cada area, para cualquier monto presupuestal */

/*
let montoPresupuestal = prompt("Ingrese valor prosupuestal") ;

let ginecologia = 40/100 ;
let traumatologia = 30/100 ;
let pediatria = 30/100 ;

let MGinecologia = parseInt(montoPresupuestal * ginecologia) ;
let MTraumatologia = parseInt(montoPresupuestal * traumatologia) ;
let Mpediatria = parseInt(montoPresupuestal * pediatria) ;
*/

/* ACTIVIDAD 8
Tres personas deciden invertir su dinero para fundar una empresa. Cada una de 
ellas invierte una cantidad distinta para obtener el porcentaje que cada quien invierte 
con respecto a la cantidad total invertida */

/*
let persona1 = prompt("Ingrese la cantidad de dinero invertido por la primer persona") ;
let persona2 = prompt("Ingrese la cantidad de dinero invertido por la segunda persona") ;
let persona3 = prompt("Ingrese la cantidad de dinero invertido por la tercera persona") ;

let totalPersona = parseInt(persona1) + parseInt(persona2) + parseInt(persona3) ;

let totalpersona1 = parseInt(persona1)* parseInt(100/totalPersona) ;
let totalPersona2 = parseInt(persona2)* parseInt(100/totalPersona) ;
let totalpersona3 = parseInt(persona3)* parseInt(100/totalPersona) ;

alert("El procentaje que cada persona invirtio en la fundacion de la empresa es de: " +totalpersona1+ "% la primera persona, " +totalPersona2+ 
"% la segunda persona" +totalpersona3+ "% la tercera persona") ;
*/
