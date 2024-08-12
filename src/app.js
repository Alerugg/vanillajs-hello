/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["Irio", "Gaston"];
  let action = ["da clases", "da cursos"];
  let how = [
    "bastante bien",
    "bastante regular",
    "muy bien",
    "de manera aceptable",
    "extremadamente bien"
  ];
  let where = [
    "a alumnos en 4Geeks",
    "a alumnos en una academia online",
    "en una escuela",
    "en el ordenador"
  ];

  const randomElement = array =>
    array[Math.floor(Math.random() * array.length)]; //  <-------  funcion flecha y asigancion de instruccion para utilizar funcion reutilizable para refactorizar y evitar tantas repeticiones de codigo y metodos
  const generateExcuse = () => {
    const whoRandom = randomElement(who);
    const actionRandom = randomElement(action); // <------ aqui usamos la funcion que indicamos arriba reutilizando la funcion sin repetir los metodos .math
    const howRandom = randomElement(how);
    const whereRandom = randomElement(where);

    return (
      whoRandom + " " + actionRandom + " " + howRandom + " " + whereRandom + "."
    );
  };

  document.getElementById("excuse").innerHTML = generateExcuse();
};

// function generateExcuse() {
//   let whoRandom = who[Math.floor(Math.random() * who.length)];
//   let actionRanadom = action[Math.floor(Math.random() * action.length)];          // codigo sin refactorizacion
//   let howRandom = how[Math.floor(Math.random() * how.length)];
//   let whereRandom = where[Math.floor(Math.random() * where.length)];

//   return (
//     whoRandom +
//     " " +
//     actionRanadom +
//     " " +
//     howRandom +
//     " " +
//     whereRandom +
//     "."
//   );
// }

// document.getElementById("excuse").innerHTML = generateExcuse();
