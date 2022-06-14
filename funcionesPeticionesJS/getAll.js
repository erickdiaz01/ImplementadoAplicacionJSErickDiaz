export const getAll = async () => {
    const d = document,
      $table = d.querySelector("#table-crud"),
      $template = d.getElementById("crud-template").content,
      $fragment = d.createDocumentFragment();
    try {
        
      let res = await axios.get("http://localhost:5000/luchadores"),
        json = await res.data;

      json.forEach(el => {
        $template.querySelector(".name").textContent = el.name;
        $template.querySelector(".description").textContent = el.description;
        $template.getElementById("edit").dataset.id = el.id;
        $template.getElementById("edit").dataset.name = el.name;
        $template.getElementById("edit").dataset.constellation = el.description;
        $template.getElementById("delete").dataset.id = el.id;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        console.log(err)
      let message = err.statusText || "Ocurrió un error";
      $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
  }