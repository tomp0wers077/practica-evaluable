"use strict";
//bibliotecas importadas
import { guardarDiscente, limpiarFormulario, mostrarDiscentes } from "./bibliotecas/helpers.js";

window.onload = () => {

    //obtener referencia de los botones por ID

  const mostrarBtn = document.getElementById("mostrar");
  const limpiarFormBtn = document.getElementById('limpiar');
  const guardarDiscenteBtn =  document.getElementById('guardar');

  //asignar eventos
 
  mostrarBtn.addEventListener("click", mostrarDiscentes); //
  limpiarFormBtn.addEventListener('click', limpiarFormulario);
  guardarDiscenteBtn.addEventListener('click', guardarDiscente);
} 
