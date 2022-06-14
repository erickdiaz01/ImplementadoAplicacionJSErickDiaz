/**
 * Funcion que maneja las acciones una vez se quiera enviar la informacion del formulario, ya sea para
 * actualizar un registro o en su defecto crear uno nuevo.
 * Para determinar si se realiza una peticion POST o una PUT se toma como parametro de validacion si se tiene
 * o no un ID en un input oculto, si este ID existe, se realizara una peticion PUT y si no lo tiene se realizara
 * una peticion POST
 * @param {Object} e Objeto que se crea cuando se dispara el evento correspondiente
 */
export const submitConditional = async (e) => {
  const d = document,
    $form = d.querySelector(".crud-form"),
    $button = $form.querySelector(".submit"),
    $nombre = $form.querySelector(".nombre"),
    $descripcion = $form.querySelector(".descripcion"),
    $id = $form.querySelector(".id");

  if (e.target === $button) {
    console.log($id.value);
    if (!$id.value) {
      //Create - POST
      try {
        let options = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({
              name: $nombre.value,
              description: $descripcion.value,
            }),
          },
          res = await axios("http://localhost:5000/luchadores", options),
          json = await res.data;
        console.log(json);

        location.reload();
      } catch (err) {
        console.log(error);
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      //Update - PUT
      try {
        let options = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({
              name: $nombre.value,
              description: $descripcion.value,
            }),
          },
          res = await axios(
            `http://localhost:5000/luchadores/${$id.value}`,
            options
          ),
          json = await res.data;
        console.log(json);

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
};
