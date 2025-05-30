# Proyecto de Registro de Usuarios

Este proyecto es un módulo simple de registro de usuarios construido con Node.js y Express. Permite a los usuarios registrarse proporcionando su nombre, correo electrónico, contraseña y tipo de usuario. La aplicación incluye validación en el front-end y una estructura de back-end para manejar los datos de los usuarios.

## Estructura del Proyecto

```
user-registration
├── app.js                  # Punto de entrada de la aplicación
├── controllers             # Contiene los archivos de controladores
│   └── registroController.js # Maneja la lógica del registro de usuarios
├── models                  # Contiene los archivos de modelos
│   └── usuario.js          # Define el modelo de Usuario
├── public                  # Contiene recursos públicos
│   ├── css
│   │   └── tailwind.css    # Estilos de Tailwind CSS
│   └── js
│       └── registro.js      # JavaScript para la validación del formulario e interactividad
├── routes                  # Contiene las definiciones de rutas
│   └── registro.js         # Define las rutas para el registro de usuarios
├── views                   # Contiene las plantillas de vistas
│   └── registro.ejs        # Plantilla EJS para el formulario de registro
```

## Funcionalidades

- Formulario de registro con campos para nombre, correo electrónico, contraseña y tipo de usuario.
- Validación en el front-end para campos requeridos, formato válido de correo electrónico y coincidencia de contraseñas.
- Mensajes dinámicos de error y éxito mostrados al usuario.
- Modal para ver los usuarios registrados.
- Estructura sencilla de back-end para manejar envíos de formularios y almacenar los datos del usuario.

## Instrucciones de Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/AurelMV/login-prueba.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd login-prueba
   cd user-registration
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

4. Inicia la aplicación:

   ```bash
   node app.js
   ```

5. Abre tu navegador y navega a `http://localhost:3000/registro` para acceder al formulario de registro.

## Uso

Completa el formulario de registro con la información requerida y envíalo. La aplicación validará los datos ingresados. Tras un registro exitoso, los datos del usuario serán procesados y almacenados.
