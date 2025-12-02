// ===== CONTACT FORM VALIDATION =====
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const msgInput = document.getElementById("msgInput");
const errorElem = document.getElementById("formError");
const successElem = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorElem.textContent = "";
  successElem.textContent = "";

  try {
    if (!emailInput.value.trim()) {
      throw new Error("Please enter your email.");
    }

    if (!emailInput.value.includes("@")) {
      throw new Error("Invalid email format.");
    }

    if (!msgInput.value.trim()) {
      throw new Error("Please enter your message.");
    }

    // Si pasa validaciones
    successElem.textContent = "Message sent successfully! ありがとうございました";
    successElem.classList.add("fade-success", "show");

    form.reset(); // 👈 limpia todos los inputs

  } catch (err) {
    errorElem.textContent = err.message;
  }
});

// ===== INPUT VALIDATION BACKGROUND =====
[nameInput, emailInput, msgInput].forEach(input => {
  input.addEventListener("blur", () => {

    // Nombre → válido si tiene texto (opcional)
    if (input === nameInput && input.value.trim()) {
      input.classList.add("input-valid");
      return;
    }

    // Email → válido si tiene @
    if (input === emailInput && input.value.includes("@")) {
      input.classList.add("input-valid");
      return;
    }

    // Mensaje → válido si NO está vacío
    if (input === msgInput && input.value.trim()) {
      input.classList.add("input-valid");
      return;
    }

    // Si no cumple, remover estilo
    input.classList.remove("input-valid");
  });
});