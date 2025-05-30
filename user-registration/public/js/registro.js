document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const userType = document.getElementById("userType");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const successMessage = document.getElementById("successMessage");

  const showUsersBtn = document.getElementById("showUsersBtn");
  const usersModal = document.getElementById("usersModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  function clearMessages() {
    if (nameError) nameError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (passwordError) passwordError.textContent = "";
    if (confirmPasswordError) confirmPasswordError.textContent = "";
    if (successMessage) {
      successMessage.classList.add("hidden");
      successMessage.textContent = "";
    }
  }

  if (showUsersBtn && usersModal && closeModalBtn) {
    showUsersBtn.addEventListener("click", () => {
      usersModal.classList.remove("hidden");
    });
    closeModalBtn.addEventListener("click", () => {
      usersModal.classList.add("hidden");
    });
    usersModal.addEventListener("click", (e) => {
      if (e.target === usersModal) usersModal.classList.add("hidden");
    });
  }

  form.addEventListener("submit", function (e) {
    clearMessages();
    let valid = true;

    // Validación de nombre
    if (!name.value.trim()) {
      if (nameError) {
        nameError.textContent = "El nombre es obligatorio.";
        nameError.classList.remove("hidden");
      }
      valid = false;
    }

    // Validación de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      if (emailError) {
        emailError.textContent = "Ingresa un correo válido.";
        emailError.classList.remove("hidden");
      }
      valid = false;
    }

    // Validación de contraseña
    if (!password.value || password.value.length < 6) {
      if (passwordError) {
        passwordError.textContent =
          "La contraseña debe tener al menos 6 caracteres.";
        passwordError.classList.remove("hidden");
      }
      valid = false;
    }

    // Validación de confirmación de contraseña
    if (password.value !== confirmPassword.value) {
      if (confirmPasswordError) {
        confirmPasswordError.textContent = "Las contraseñas no coinciden.";
        confirmPasswordError.classList.remove("hidden");
      }
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
      return;
    }

    if (successMessage) {
      successMessage.textContent = "¡Registro completado con éxito!";
      successMessage.classList.remove("hidden");
    }
  });
});
