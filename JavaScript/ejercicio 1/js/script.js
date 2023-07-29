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

/* let 1parcial = prompt ("Ingrese la nota de su primer parcial") ;
let 2parcial = prompt ("Ingrese la nota de su segundo parcial") ;
let 3parcial = prompt ("Ingrese la nota de su tercer parcial parcial") */


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

const porkm = prompt ("Ingrese los km recorridos") ;

const km = 15000 ;
const totalkm = parseInt(porkm * km) ;
const totalCarrera = parseInt(porkm) + parseInt(totalkm) ;
alert("Total a pagar por km: "+totalCarrera) ;
