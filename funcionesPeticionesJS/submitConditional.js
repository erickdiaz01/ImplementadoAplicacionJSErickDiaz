export const submitConditional = async (e) => {
    const d = document,
  $form = d.querySelector(".crud-form");
    if (e.target === $form) {
        if (!e.target.id.value) {
          //Create - POST
          try {
            let options = {
              method: "POST",
              headers: {
                "Content-type": "application/json; charset=utf-8"
              },
              data: JSON.stringify({
                name: e.target.nombre.value,
                description: e.target.descripcion.value
              })
            },
              res = await axios("http://localhost:5000/luchadores", options),
              json = await res.data;
              console.log(json)

            location.reload();
          } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
          }
        } else {
          //Update - PUT
          try {
            let options = {
              method: "PUT",
              headers: {
                "Content-type": "application/json; charset=utf-8"
              },
              data: JSON.stringify({
                name: e.target.nombre.value,
                description: e.target.descripcion.value
              })
            },
              res = await axios(`http://localhost:5000/santos/${e.target.id.value}`, options),
              json = await res.data;
              console.log(json)

            location.reload();
          } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
          }
        }
      }
    };
