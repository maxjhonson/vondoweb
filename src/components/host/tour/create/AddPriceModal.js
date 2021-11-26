import React, { useEffect, useState } from "react";

function AddPriceModal({ fields, currentIndex }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [seatsQuantity, setSeatsQuantity] = useState(1);
  const [price, setPrice] = useState("");

  const addOrUpdate = () => {
    if (currentIndex > -1) addNew();
    else updateCurrent();
    reset();
  };

  const addNew = () => {
    fields.push({ name, description, seatsQuantity, price });
  };

  const updateCurrent = () => {
    fields.update("prices", currentIndex, {
      name,
      description,
      seatsQuantity,
      price,
    });
  };

  const close = () => {
    reset();
    window.$("#pricesModal").modal("hide");
  };

  const reset = () => {
    currentIndex = -1;
    setName("");
    setDescription("");
    setSeatsQuantity(1);
    setPrice("");
  };

  useEffect(() => {
    if (currentIndex > -1) {
      const current = fields.value[currentIndex];
      setName(current.name);
      setDescription(current.description);
      setSeatsQuantity(current.seatsQuantity);
      setPrice(current.price);
    } else {
      reset();
    }
  }, [currentIndex]);

  return (
    <div
      class="modal fade"
      id="pricesModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detalle de los Precios</h5>
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={close}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label class="col-form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label class="col-form-label">Descripcion:</label>
                <textarea
                  class="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div class="form-group">
                <label class="col-form-label">Valido para 1 personas:</label>
                <select
                  value={seatsQuantity}
                  onChange={(e) => setSeatsQuantity(e.target.value)}
                  className="form-control"
                >
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="3">3 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="5">5 Personas</option>
                  <option value="6">6 Personas</option>
                  <option value="7">7 Personas</option>
                  <option value="8">8 Personas</option>
                  <option value="9">9 Personas</option>
                  <option value="10">10 Personas</option>
                </select>
              </div>
              <div class="form-group">
                <label class="col-form-label">Precio:</label>
                <input
                  type="number"
                  class="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onClick={close}>
              Cerrar
            </button>
            <button type="button" class="btn btn-primary" onClick={addOrUpdate}>
              {currentIndex > -1 ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPriceModal;
