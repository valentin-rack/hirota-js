// ---------------------------------------------------------------- //
// ---------------------- SELECTIONS STYLING ---------------------- //
// ---------------------------------------------------------------- //

// -------------- SELECTIONS / TEXT & NUMBER INPUTS -------------- //
document.querySelectorAll(".karate-input-row").forEach(row => {

  const input = row.querySelector(".karate-input");

  const checkValue = () => {
    const value = input.value.trim();

    if (value !== "") {
      row.classList.add("completed");
      input.classList.add("text-white");
    } else {
      row.classList.remove("completed");
      input.classList.remove("text-white");
    }
  };

  // ENTER key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkValue();
      input.blur(); // opcional, saca el foco
    }
  });

  // Blur event
  input.addEventListener("blur", () => {
    checkValue();
  });
});


// -------------- SELECTIONS / KARATE-GI MODEL -------------- //
document.querySelectorAll(".karate-gi-option").forEach(option => {

  option.addEventListener("click", () => {

    // limpiar selección previa
    document.querySelectorAll(".karate-gi-option").forEach(opt => {
      opt.classList.remove("selected", "bg-black/60", "text-white");
      opt.querySelector(".option-text").classList.remove("text-white");
      opt.querySelector(".option-price").classList.remove("text-white");
      const circle = opt.querySelector(".circle");
      const inner = opt.querySelector(".inner-circle");
      circle.classList.remove("border-white");
      inner.classList.add("hidden");
      inner.classList.remove("bg-white");
    });

    // aplicar selección a la clickeada
    option.classList.add("selected", "bg-black/60", "text-white");
    option.querySelector(".option-text").classList.add("text-white");
    option.querySelector(".option-price").classList.add("text-white");

    const circle = option.querySelector(".circle");
    const inner = option.querySelector(".inner-circle");

    circle.classList.add("border-white");
    inner.classList.remove("hidden");
    inner.classList.add("bg-white");
  });

});


// -------------- SELECTIONS / HIGH-WAIST (OPTIONAL) -------------- //



// -------------- SELECTIONS / SHRINKAGE -------------- //
document.querySelectorAll(".karate-shrink-option").forEach(option => {

  option.addEventListener("click", () => {

    // limpiar selección previa
    document.querySelectorAll(".karate-shrink-option").forEach(opt => {
      opt.classList.remove("selected", "bg-black/60", "text-white");
      opt.querySelector(".option-text").classList.remove("text-white");
      const circle = opt.querySelector(".circle");
      const inner = opt.querySelector(".inner-circle");
      circle.classList.remove("border-white");
      inner.classList.add("hidden");
      inner.classList.remove("bg-white");
    });

    // aplicar selección a la clickeada
    option.classList.add("selected", "bg-black/60", "text-white");
    option.querySelector(".option-text").classList.add("text-white");

    const circle = option.querySelector(".circle");
    const inner = option.querySelector(".inner-circle");

    circle.classList.add("border-white");
    inner.classList.remove("hidden");
    inner.classList.add("bg-white");
  });

});


// -------------- SELECTIONS / SLEEVES, PANTS & JACKET HEMS -------------- //
document.querySelectorAll(".karate-hems-option").forEach(option => {

  option.addEventListener("click", () => {

    // limpiar selección previa
    document.querySelectorAll(".karate-hems-option").forEach(opt => {
      opt.classList.remove("selected", "bg-black/60", "text-white");
      opt.querySelector(".option-text").classList.remove("text-white");
      opt.querySelector(".option-price").classList.remove("text-white");
      const circle = opt.querySelector(".circle");
      const inner = opt.querySelector(".inner-circle");
      circle.classList.remove("border-white");
      inner.classList.add("hidden");
      inner.classList.remove("bg-white");
    });

    // aplicar selección a la clickeada
    option.classList.add("selected", "bg-black/60", "text-white");
    option.querySelector(".option-text").classList.add("text-white");
    option.querySelector(".option-price").classList.add("text-white");

    const circle = option.querySelector(".circle");
    const inner = option.querySelector(".inner-circle");

    circle.classList.add("border-white");
    inner.classList.remove("hidden");
    inner.classList.add("bg-white");
  });

});




// ---------------------------------------------------------------- //
// ----------------------- SELECTIONS LOGIC ----------------------- //
// ---------------------------------------------------------------- //