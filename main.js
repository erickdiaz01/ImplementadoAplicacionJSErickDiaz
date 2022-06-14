//Importaciones de los metodos del CRUD

import { getAll } from "./funcionesPeticionesJS/getAll.js";
import { submitConditional } from "./funcionesPeticionesJS/submitConditional.js";



//Manipulación del DOM
const d = document;

 d.addEventListener("DOMContentLoaded", getAll);

 d.addEventListener("submit", e => {
     e.preventDefault()
     submitConditional(e);
 });