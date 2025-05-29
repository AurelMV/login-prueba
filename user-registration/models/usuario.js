class Usuario {
    constructor(nombre, correo, contraseña, tipoUsuario) {
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.tipoUsuario = tipoUsuario;
    }
}

module.exports = Usuario;