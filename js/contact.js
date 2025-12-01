// ===== CONTACT FORM VALIDATION =====
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const msgInput = document.getElementById("msgInput");
const errorElem = document.getElementById("formError");
const successElem = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita refresh

  errorElem.textContent = "";
  successElem.textContent = "";

  try {
    if (!nameInput.value.trim()) {
      throw new Error("Please enter your name.");
    }

    if (!emailInput.value.trim()) {
      throw new Error("Please enter your email.");
    }

    // Validación básica
    if (!emailInput.value.includes("@")) {
      throw new Error("Invalid email format.");
    }

    // Si pasa validaciones
    successElem.textContent = "Message sent successfully! ありがとうございました";
    form.reset();

  } catch (err) {
    errorElem.textContent = err.message;
  }
});