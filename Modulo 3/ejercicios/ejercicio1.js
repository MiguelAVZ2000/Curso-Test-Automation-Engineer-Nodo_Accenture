function validarUsuario(usuario) {
  const { nombre, edad, correo } = usuario;

  // Validación del nombre
  if (!nombre || nombre.trim() === "") {
    return {
      valido: false,
      mensaje: "El nombre no puede estar vacío."
    };
  }

  // Validación de la edad
  if (edad < 18) {
    return {
      valido: false,
      mensaje: "El usuario debe ser mayor de 18 años."
    };
  }

  // Validación del correo
  if (!correo.includes("@")) {
    return {
      valido: false,
      mensaje: "El correo debe contener el símbolo '@'."
    };
  }

  // Si todo está correcto
  return {
    valido: true,
    mensaje: "Usuario válido."
  };
}


// ---------------------------------------------
// Script de pruebas
// ---------------------------------------------

const pruebas = [
  { nombre: "Ana", edad: 25, correo: "ana@test.com" },
  { nombre: "", edad: 30, correo: "juan@test.com" },
  { nombre: "Luis", edad: 16, correo: "luis@test.com" },
  { nombre: "María", edad: 22, correo: "mariatest.com" },
  { nombre: "Pedro", edad: 18, correo: "pedro@mail.com" }
];

pruebas.forEach((usuario, index) => {
  console.log(`Prueba ${index + 1}:`, validarUsuario(usuario));
});
