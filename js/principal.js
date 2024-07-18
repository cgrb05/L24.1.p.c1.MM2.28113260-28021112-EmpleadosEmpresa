/**
 * Una empresa conoce de sus empleados los siguientes datos: nombre, sexo (Masculino) (Femenino), edad. 
 * Se desea que determine e imprima: promedio de edad de los hombres y la mayor edad entre las mujeres procesadas y quien la tiene. 
 * Se dispone de los siguientes datos devaros empleados: (nombre, sexo, edad) (Mary, ‘F’, 43), (José, ‘M’, 40), (Carlos, ‘M’, 30), 
 * (Pedro, ‘M’, 50), (Mery, ‘F’, 45), (Liz, ‘F’, 50) Promedio de edad de los hombres: 40 
 * Mayor edad entre las mujeres es: 50 y la tiene Liz
 */

import Cl_trabajador from "./Cl_trabajador.js";
import Cl_empresa from "./Cl_empresa.js";

let trabajador1=new Cl_trabajador(Mary,"F", 43);
let trabajador2=new Cl_trabajador(Jose, "M", 40);
let trabajador3=new Cl_trabajador(Carlos,"M",30);
let trabajador4=new Cl_trabajador(Pedro,"M",50);
let trabajador5=new Cl_trabajador(Mery,"F",45);
let trabajador6=new Cl_trabajador(Liz,"F",50);

let empresa = new Cl_empresa();
empresa.procesarTrabajador(trabajador1);
empresa.procesarTrabajador(trabajador2);
empresa.procesarTrabajador(trabajador3);
empresa.procesarTrabajador(trabajador4);
empresa.procesarTrabajador(trabajador5);
empresa.procesarTrabajador(trabajador6);

let salida = document.getElementById("Salida");

salida.innerHTML+="Promedio de edad de los hombres:"+empresa.promedioEdadM+<br></br>;
salida.innerHTML+="Mayor edad entre las mujeres es:"+empresa.edadMayor+"y la tiene"+empresa.auxNombre+<br></br>;
