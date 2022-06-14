/**
 * Arrow function que maneja los eventos correspondientes a las acciones posibles a realizar en la tabla
 * para cada uno de los registros que se tienen, verifica si se 'clickeó' el boton de editar o el de eliminar,
 * dependiendo de eso realiza una acción especifica.
 * Si se 'clickeó' el boton de editar, se cambia el titulo del formulario a 'Editar luchador', adicional a eso
 * se insertan los valores del registro en los inputs del formulario para que el usuario edite con mayor
 * precisión ademas de agregar el ID existente del registro para que cuando se realice el submit se mande la
 * solicitud PUT.
 * Si se 'clickeó' el boton de eliminar se lanza una alerta de confirmacion para eliminar definitivamente o no
 * el registro, si se confirma la eliminacion se lanza la petición de DELETE con el ID del registro.
 * @param {Object} e Objeto que se crea cuando se dispara el evento correspondiente
 */
export const actionClick = async (e) => {
  const d = document;

  if (e.target.matches("#edit")) {
    const $form = d.querySelector(".crud-form"),
      $title = d.querySelector(".crud-title");
    $title.textContent = "Editar Luchador";
    $form.nombre.value = e.target.dataset.name;
    $form.descripcion.value = e.target.dataset.description;
    $form.id.value = e.target.dataset.id;
  }

  if (e.target.matches("#delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
    );

    if (isDelete) {
      //Delete - DELETE
      try {
        let options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
          },
          res = await axios(
            `http://localhost:5000/luchadores/${e.target.dataset.id}`,
            options
          ),
          json = await res.data;
        console.log(json);
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
};
