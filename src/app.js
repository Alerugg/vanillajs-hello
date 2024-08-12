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
    "muy mal",
    "de manera aceptable"
  ];
  let where = [
    "a alumnos en 4Geeks",
    "a alumnos en una academia online",
    "en una escuela",
    "en el ordenador"
  ];

  function generateExcuse() {
    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRnadom = action[Math.floor(Math.random() * action.length)];
    let howRandom = how[Math.floor(Math.random() * action.length)];
    let whereRandom = where[Math.floor(Math.random() * where.length)];

    return (
      whoRandom + " " + actionRnadom + " " + howRandom + " " + whereRandom + "."
    );
  }

  document.getElementById("excuse").innerHTML = generateExcuse();
};
