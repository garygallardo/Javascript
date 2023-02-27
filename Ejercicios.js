// 1) Sumar dos numeros siempre cuando el primero sea mayor al segundo
class ejercicio1 {
  ejercicio() {
    let num1 = 5;
    let num2 = 3;
    let suma;
    suma = num1 + num2;
    if (num1 > num2) {
      console.log(
        "ejercicio 1: La suma de dos numeros siempre cuando el primero sea mayor al segundo "
      );
      console.log(num1, "+", num2, "=", suma);
    } else {
      console.log("El primer numero es menor");
    }
  }
}
let ejercicio0 = new ejercicio1();
ejercicio0.ejercicio();
// 2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
class ejercicio2 {
  ejercicio5() {
    let num1 = 9;
    let num2 = 3;
    let suma;
    let resta;
    let mult;
    let div;
    let residuo;
    suma = num1 + num2;
    resta = num1 - num2;
    mult = num1 * num2;
    div = num1 / num2;
    residuo = num1 % num2;
    console.log("");
    console.log(
      "ejercicio 2: operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y residuo"
    );
    console.log("Numero 1:", num1, "Numero 2:", num2);
    console.log(" suma=", suma);
    console.log(" resta=", resta);
    console.log(" multiplicacion=", mult);
    console.log(" division=", div);
    console.log(" residuo=", residuo);
  }
}
let ejercicio3 = new ejercicio2();
ejercicio3.ejercicio5();
// 3) Presentar el mayor de dos numeros
class mayordeunNumero {
  ejercicio4() {
    let num1 = 7;
    let num2 = 4;
    console.log("");
    console.log("Ejercicio 3:Presentar el mayor de dos numeros");
    if (num1 > num2) {
      console.log(num1, ">", num2);
      console.log("El primer Numero es mayor");
    } else {
      num1 < num2;
      console.log(num1, "<", num2);
      console.log("El segundo Numero es mayor");
    }
  }
}
let mayor = new mayordeunNumero();
mayor.ejercicio4();
// 4) Dado un nombre presentarlo
class nombreP {
  Ejercicio5() {
    console.log("");
    console.log("Ejercicio 4: Dado un nombre presentarlo");
    const names = ["Ana", "Joe", "Karen"];
    console.log(names);
  }
}
let nombre = new nombreP();
nombre.Ejercicio5();
// 5) Dado un valor de compra presentar el total considerando un 12% de iva
class Valor {
  Ejercicio6() {
    let valor1 = 300;

    let valoresconiva = valor1 * 1.12;
    console.log("");
    console.log(
      "Ejercicio 5:Dado un valor de compra presentar el total considerando un 12% de iva"
    );
    console.log("Valor 1:", valor1);
    console.log("Valor total con iva:", valoresconiva);
  }
}
let val = new Valor();
val.Ejercicio6();
// 6) Presentar 5 veces un nombre
class Nombreñ {
  ejercicio6() {
    let nombre = "Franccine";
    let contador = 1;
    console.log("")
    console.log("Ejercicio 6:Presentar 5 veces un nombre");
    console.log("Nombre:Franccine");
    for (contador = 1; contador <= 5; contador++) {
      console.log(`${contador} ${nombre}`);
    }
  }
}
nombre = new Nombreñ();
nombre.ejercicio6();
// 7) Presentar los numeros multiplos de 3 del 3 al 21
class multiplos {
  Ejercicio7() {
    console.log("")
  console.log("Ejercicios 7:Presentar los numeros multiplos de 3 del 21 al 3")
  let n=3
  while (n<21){
   if (n%3==0){
    console.log(n)
 }
n=n+1
  }   
}
}
multp = new multiplos();
multp.Ejercicio7();
// 8) Presentar los numeros multiplos de 3 del 21 al 3
class Multiplos {
  Ejercicio8(){
    console.log("")
  console.log("Ejercicio 8:Presentar los numeros multiplos de 3 del 21 al 3:")
        let n=21
        while (n>=3){
         if (n%3==0){
          console.log(n)
       }
      n=n-1
        }   
    }
}
mul = new Multiplos();
mul.Ejercicio8();
// 9) Dados dos nombres indicar si son iguales o diferentes
class Nigual {
  Ejercicio9() {
    console.log("Dados dos nombres indicar si son iguales o diferentes")
       let na1="el pepe"
       let na2="el pepe"
       if (na1=na2){
        console.log(na1,na2,"son nombres iguales")
    }
    else {
        console.log(na1,na2,"no son nombres iguales") 
    }
  }
}
Igual = new Nigual();
Igual.Ejercicio9();
//10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
class arreglo {
  arreglo11() {
    console.log("")
    console.log("Ejercicio 10:Presenta Elementos De Un Arreglo Que Tengan Menos De 5 Caracteres");
    let arreglo = [
      "435656",
      "345434",
      "12",
      "123456",
      "12",
      "2",
      "12",
      "1",
      "9",
      "434355",
    ];
    console.log("el arreglo es:", arreglo);
    for (let pos = 0; pos < 10; pos = pos + 1) {
      if (arreglo[pos].length < 5) {
        console.log(`pos->${pos} Elemento:${arreglo[pos]}`);
      }
    }
  }
}
let arreglo111 = new arreglo();
arreglo111.arreglo11();
//
class arr {
  Ejercicio11() {
    console.log("")
    console.log("Ejercicio 11:Dado un arreglo presentar sus elementos")
      let arreglo=[5,4,3,2,1]
      console.log(arreglo)
  }
}
 arri= new arr();
arri.Ejercicio11();
// 12) Dado un arreglo de numeros presentar los menores a 10
class arrmenor {
  Ejercicio12() {
    console.log("")
    console.log("Ejercicio 12:Dado un arreglo de numeros presentar los menores a 10")
        let num=[5,3,70,1,16]
        let long= num.length,c=0
        console.log("el arreglo es:",num)
        while (c < long){
            if (num[c]<10){
                console.log(num[c],"es menor que 10")
            }
           c=c+1 
          }
  }
}
Igua = new arrmenor();
Igua.Ejercicio12();
// 13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares
class final {
  Ejercicio13() {
    console.log("")
    console.log("Ejercicio 13:Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
        let num=[3,7,20,8,17]
        let lon=num.length,c=0,suma=0
        console.log("El arreglo es:",num)
        while(c<lon){
            if (num[c] % 2 == 0){
                suma=suma+num[c]
                console.log("La suma de los pares es:",suma)
            }else{
           console.log(num[c],"Es numero impar")
            }
            c=c+1
  }
}
}
Ig = new final();
Ig.Ejercicio13();
// 14) Presentar el primero el medio y el ultimo valor de un arreglo
class arreglo1478 {
  Ejercicio14() {
    console.log("")
    console.log("Ejercicio 14:Presentar el primero el medio y el ultimo valor de un arreglo")
        let num=[3,6,18,3,60]
        let central = num[(num.length-1) /2]
        let ultimo =num[num.length-1]
        console.log("El arreglo es:",num)
    console.log("El primer numero del arreglo es:",num[0])
    console.log("El numero medio del arreglo es:",central)
    console.log("El ultimo numero del arreglo es:",ultimo)
  }
}
al = new arreglo1478();
al.Ejercicio14();
// 15) Calcular el vuelto de un a compra dado el costo y el pago
class costo {
  Ejercicio15() {
    console.log("")
    console.log("Ejercicio 15:Calcular el vuelto de un a compra dado el costo y el pago")
        let costo=25
        let pago = 30
        let cambio=30-25
        console.log("El costo es:",costo)
        console.log("El pago es de:",pago)
        console.log("El cambio es:",cambio)
  }
}
tb = new costo();
tb.Ejercicio15();
// 16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
// 	ejemplo: num=5
class tabla {
  Ejercicio16() {
    console.log("")
    console.log("Ejercicio 16:Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        let n=9
        let n1=1,mul=1
        console.log("La tabla del:",n)
        while(n1<=12){
            mul=n*n1
            console.log(n,"*",n1,"=",mul)
            n1=n1+1
  }
 }
}
ml = new tabla();
ml.Ejercicio16();
// 17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
class sucesivo {
  Ejercicio17() {
    console.log("")
    console.log("Ejercicio 17: Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
    let n1=5,n2=5
    let suma=0
for(let i=0;i<n2;i=i+1){
        suma=n1+suma
        console.log(suma-n1,"+",n1,"=",suma)  
       }
    console.log("la multipliación de ",n1," * ",n2," es = ",suma)
  }
}
md = new sucesivo();
md.Ejercicio17();
//18)Realizar la division de dos numeros por medio de restas sucesivas
class restasSu {
  Ejercicio18() {
    console.log("")
    console.log("Ejercicio 18:Realizar la division de dos numeros por medio de restas sucesivas")
    let n1=8,n2=2
    let c=0
     let res=n1
     while (res-n2>=0){
        res=res-n2
        console.log(res+n2,"-",n2,"=",res)
        c=c+1
     }
    console.log("La division entre:",n1,"/",n2,"=",c)
  }
}
nm = new restasSu();
nm.Ejercicio18();
// 19)Calcular el factorial de un numero
class fact {
  Ejercicio19() {
    console.log("")
    console.log("Ejercicio 19:Calcular el factorial de un numero")
    let n=5
    let c=1,fac=1
    while(c<=n){
        fac=fac*c
        c=c+1
    }
    console.log("El factorial del numero 5 es:",fac)
  }
}
fc = new fact();
fc.Ejercicio19();
// 20)Calcular el exponente de un numero
class exponente {
  Ejercicio20() {
    console.log("")
    console.log("Ejercicio 20:Calcular el exponente de un numero")
    let n=2,ex=3,po=1,c=0
   let elevado= Math.pow(n, ex);
    console.log("2","^",ex,"=",elevado)
  }
}
ex = new exponente();
ex.Ejercicio20();
// 21)Calcular la serie de fibonacci dado un numero
class fibonacci {
  Ejercicio21() {
    console.log("")
    console.log("Ejercicio 21:Calcular la serie de fibonacci dado un numero")
    let a=0,b=1,c=1,cont=3,n=8
    while (cont < n){
        a=b;b=c;c = a+b
        console.log(c)
        cont=cont +1
    }
  }
}
fbc = new fibonacci();
fbc.Ejercicio21();
//22) Dado un numero invertirlo
class invertido {
  Ejercicio22() {
    console.log("")
    console.log("Ejercicio 22:Dado un numero invertirlo")
    let num=395
    let ninvertido=0,d=0
    console.log("El numero es:",num)
    while (num != 0){
        d=num%10
        ninvertido=ninvertido*10+d
        num=Math.trunc(num/10)
     
      }
      console.log("Numero invertido:",ninvertido)
  }
}
inv = new invertido();
inv.Ejercicio22();
// 23) Presentar los divisores de un numero
class divisores {
  Ejercicio23() {
    console.log("")
    console.log("Ejercicio 23: Presentar los divisores de un numero")
    let num=8,c=1
    console.log("Los divisores de:",num)
    for(c=1;c<=num;c++){
        if (num % c==0){
            console.log("Son:",c)
        }
  }
}
}
dv = new divisores();
dv.Ejercicio23();
// 24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los 
// divisores incluidos el 1 y excluido el propio numero dada igual al numero)
class perfect {
  Ejercicio24() {
    console.log("")
    console.log("Ejercicio 24: Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los")
    let divisores=0,num=6,i=0,sumaperf=0
    console.log("Numero:",num)
    for(i=1;i<num;i=i+1){
        if(num % i == 0){
            console.log(i)
            sumaperf=sumaperf+i
        }
    }
    console.log("")
    if(sumaperf==num){
        console.log("El numero",num,"es un numero perfecto")
    }else{
        console.log("El numero",num,"es un numero no perfecto")
  }
}
}
perf = new perfect();
perf.Ejercicio24();
// 25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible 
// para 1 y el propio numero, es decir no tenga divisores)
class primos {
  Ejercicio25() {
    console.log("")
    console.log("Ejercicio 25:Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores")
    let num=7
    let cont=0,i=1
    console.log("Numero:",num)
for(i=1;i<=num;i++)
{
 if(num % i==0)
 {
    cont=cont+1
 }
}
if(cont==2)
{

 console.log(num," es primo")
}
else
{
 console.log(num," no es primo")
}
}
}
pr = new primos();
pr.Ejercicio25();
