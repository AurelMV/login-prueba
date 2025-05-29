document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const userTypeInput = document.getElementById('userType');
    const messageBox = document.getElementById('messageBox');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearMessages();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const userType = userTypeInput.value;

        let isValid = true;

        if (!name) {
            showMessage('El nombre es obligatorio.', 'error');
            isValid = false;
        }

        if (!validateEmail(email)) {
            showMessage('Por favor, introduce un correo electrónico válido.', 'error');
            isValid = false;
        }

        if (!password) {
            showMessage('La contraseña es obligatoria.', 'error');
            isValid = false;
        }

        if (password !== confirmPassword) {
            showMessage('Las contraseñas no coinciden.', 'error');
            isValid = false;
        }

        if (isValid) {
            showMessage('Registro exitoso. Enviando datos...', 'success');
            // Simulate API call
            setTimeout(() => {
                form.reset();
                showMessage('Datos enviados correctamente.', 'success');
            }, 1000);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showMessage(message, type) {
        messageBox.textContent = message;
        messageBox.className = type === 'error' ? 'text-red-500' : 'text-green-500';
    }

    function clearMessages() {
        messageBox.textContent = '';
        messageBox.className = '';
    }
});