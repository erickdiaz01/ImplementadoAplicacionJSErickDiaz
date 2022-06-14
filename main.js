//Importaciones de los metodos del CRUD
import { actionClick } from "./funcionesPeticionesJS/actionClick.js";
import { getAll } from "./funcionesPeticionesJS/getAll.js";
import { submitConditional } from "./funcionesPeticionesJS/submitConditional.js";

/**
 * Funcion principal autoejecutable que encapsula el manejo del DOM para agregar los listener junto con los
 * metodos que manejaran los eventos
 * @author Erick Diaz
 * @date 14/06/2022
 */
(function main() {
  const d = document,
    $form = d.querySelector(".crud-form"),
    $button = $form.querySelector(".submit");

  d.addEventListener("DOMContentLoaded", getAll);

  $button.addEventListener("click", (e) => {
    e.preventDefault();
    submitConditional(e);
  });

  d.addEventListener("click", async (e) => {
    e.preventDefault();
    actionClick(e);
  });
})();
