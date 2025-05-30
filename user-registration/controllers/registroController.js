class RegistroController {
  constructor() {
    this.users = [];
  }

  registerUser(req, res) {
    const { name, email, password, confirmPassword, userType } = req.body;

    // Validaciones...
    if (!name || !email || !password || !userType) {
      return res.render("registro", {
        users: this.users,
        error: "Todos los campos son obligatorios.",
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.render("registro", {
        users: this.users,
        error: "Formato de correo inválido.",
      });
    }
    if (password !== confirmPassword) {
      return res.render("registro", {
        users: this.users,
        error: "Las contraseñas no coinciden.",
      });
    }

    // Guardar usuario
    const newUser = { name, email, userType };
    this.users.push(newUser);

    // Guardar mensaje en sesión y redirigir
    req.session = req.session || {};
    req.session.success = "¡Usuario registrado exitosamente!";
    return res.redirect("/registro");
  }
}

module.exports = new RegistroController();
