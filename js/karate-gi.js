// ---------------------------------------------------------------- //
// ------------------------- CLASS SYSTEM ------------------------- //
// ---------------------------------------------------------------- //

/* ------------------------ CLASES SEMÁNTICAS ------------------------
  gi-option -----------------> opción exclusiva (radio disguised)
  gi-addon ------------------> opción opcional (toggle)
  gi-input required ---------> input obligatorio
  gi-input optional ---------> input opcional
  gi-group ------------------> grupo de tabla
*/

/* ------------------------- CLASES DE GRUPO -------------------------
  gi-model ------------------> karate-gi model
  gi-jacket-measure ---------> jacekt measurement
  gi-pants-measure ----------> pants measurement
  gi-high-waist -------------> high-waist
  gi-shrinkage---------------> shrinkage
  gi-body-measure -----------> body measurements
  gi-embroidery -------------> embroidery
  gi-hems--------------------> hems
*/

/* --------------- IDENTIFICADOR INDIVIDUAL: "data-id" & "data-price" ---------------
  Examples:

  <tr class="k-option k-model" data-id="tsubasa-evo1" data-price="250">
  <tr class="k-option k-model" data-id="kuu" data-price="250">

  <input class="k-input k-jacket-measure required"
        data-id="A"
        data-type="number"
  />

  <tr class="k-addon k-high-waist" data-id="highWaist" data-price="15">
*/


/* ------------------------- CART ITEM -------------------------
const karateGi = {
  model: "tsubasa-evo1",
  jacket: { A: 97, B: 61, C: 47, D: 16, E: 24, F: 44 },
  pants: { G: 16, H: 47, I: 16, J: 24, highWaist: true },
  shrinkage: "hirota",
  body: { height: 180, weight: 75, waist: 82 },
  embroidery: { jacket: "", pants: "", chest: "", shoulder: "" },
  hems: "ultra-thick-5cm",
  basePrice: 250,
  addonsPrice: 67,
  total: 317
};
*/



// ---------------------------------------------------------------- //
// ----------------------- SELECTIONS LOGIC ----------------------- //
// ---------------------------------------------------------------- //


// ----------------- GI-INPUT ELEMENTS STYLING ----------------- //

// Función que toma un "input" y si tiene texto agrega la clase "completed" a su row
const processInput = (input, row) => {
  const value = input.value.trim();
  if (value !== "") {
    row.classList.add("completed");
    input.classList.add("text-white");
  } else {
    row.classList.remove("completed");
    input.classList.remove("text-white");
  }
};

document.querySelectorAll(".gi-input-row").forEach(row => {
  const input = row.querySelector(".gi-input");

  // Cuando saco el foco ("blur") de un input llama a processInput()
  input.addEventListener("blur", () => processInput(input, row));

  // Si presiono la tecla ENTER llama a processInput() y saca el foco con blur()
  input.addEventListener("keydown", (e) => {
    // si presiono "enter"...
    if (e.key === "Enter") {
      processInput(input, row);
      input.blur();
    }
  });
});



// -------------------- GI-MODEL SELECTION -------------------- //

// Función que estiliza y marca opción como "selected"
const selectModelOption = option => {
  option.classList.add("selected", "bg-black/60", "text-white");
  const circle = option.querySelector(".circle");
  const inner = option.querySelector(".inner-circle");
  circle.classList.add("border-white");
  inner.classList.remove("hidden");
  inner.classList.add("bg-white");
};

// Borrar selección anterior
const resetModelOptions = () => {
  document.querySelectorAll(".gi-model").forEach(opt => {
    opt.classList.remove("selected", "bg-black/60", "text-white");
    const circle = opt.querySelector(".circle");
    const inner = opt.querySelector(".inner-circle");
    circle.classList.remove("border-white");
    inner.classList.add("hidden");
    inner.classList.remove("bg-white");
  });
};

// Cada vez que clickeo una opción "gi-model", reseteo selección y marco la nueva
document.querySelectorAll(".gi-model").forEach(option => {
  option.addEventListener("click", () => {
    resetModelOptions();
    selectModelOption(option);
  });
});



// -------------------- HIGH-WAIST OPTIONAL TOGGLE -------------------- //

const resetHighWaist = () => {
  document.querySelectorAll(".gi-high-waist").forEach(opt => {
    opt.classList.remove("selected", "bg-black/60", "text-white");
    const circle = opt.querySelector(".circle");
    const inner = opt.querySelector(".inner-circle");-
    circle.classList.remove("border-white");
    inner.classList.add("hidden");
    inner.classList.remove("bg-white");
  });
};

const toggleHighWaist = option => {
  const isSelected = option.classList.contains("selected");

  if (isSelected) {
    resetHighWaist(); // simplemente la apago
    return;
  }

  resetHighWaist(); // limpio previos (por si luego agrego más addons similares)
  option.classList.add("selected", "bg-black/60", "text-white");
  const circle = option.querySelector(".circle");
  const inner = option.querySelector(".inner-circle");
  circle.classList.add("border-white");
  inner.classList.remove("hidden");
  inner.classList.add("bg-white");
};

document.querySelectorAll(".gi-high-waist").forEach(option => {
  option.addEventListener("click", () => toggleHighWaist(option));
});




// -------------------- GI-SHRINKAGE SELECTION  -------------------- //

const resetShrinkage = () => {
  document.querySelectorAll(".gi-shrinkage").forEach(opt => {
    opt.classList.remove("selected", "bg-black/60", "text-white");
    const circle = opt.querySelector(".circle");
    const inner = opt.querySelector(".inner-circle");
    circle.classList.remove("border-white");
    inner.classList.add("hidden");
    inner.classList.remove("bg-white");
  });
};

const selectShrinkage = option => {
  resetShrinkage();
  option.classList.add("selected", "bg-black/60", "text-white");
  const circle = option.querySelector(".circle");
  const inner = option.querySelector(".inner-circle");
  circle.classList.add("border-white");
  inner.classList.remove("hidden");
  inner.classList.add("bg-white");
};

document.querySelectorAll(".gi-shrinkage").forEach(option => {
  option.addEventListener("click", () => selectShrinkage(option));
});




// -------------------- GI-HEMS SELECTION -------------------- //

const resetHems = () => {
  document.querySelectorAll(".gi-hems").forEach(opt => {
    opt.classList.remove("selected", "bg-black/60", "text-white");
    const circle = opt.querySelector(".circle");
    const inner = opt.querySelector(".inner-circle");
    circle.classList.remove("border-white");
    inner.classList.add("hidden");
    inner.classList.remove("bg-white");
  });
};

const toggleHems = option => {
  const isSelected = option.classList.contains("selected");

  if (isSelected) {
    resetHems(); // simplemente la apago
    return;
  }

  resetHems();
  option.classList.add("selected", "bg-black/60", "text-white");
  const circle = option.querySelector(".circle");
  const inner = option.querySelector(".inner-circle");
  circle.classList.add("border-white");
  inner.classList.remove("hidden");
  inner.classList.add("bg-white");
};

document.querySelectorAll(".gi-hems").forEach(option => {
  option.addEventListener("click", () => toggleHems(option));
});



// ---------------------------------------------------------------- //
// ----------------------- SELECTIONS LOGIC ----------------------- //
// ---------------------------------------------------------------- //