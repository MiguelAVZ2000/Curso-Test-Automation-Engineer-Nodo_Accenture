// ---------------------------------------------
// Base de datos ficticia
// ---------------------------------------------
const usuarios = [
  { id: 1, nombre: "Ana", correo: "ana@test.com" },
  { id: 2, nombre: "Luis", correo: "luis@test.com" },
  { id: 3, nombre: "María", correo: "maria@test.com" }
];


// ---------------------------------------------
// Función que retorna una promesa
// ---------------------------------------------
function buscarUsuarioPorId(id) {
  return new Promise((resolve, reject) => {
    
    // Simular retraso de búsqueda en BD (opcional)
    setTimeout(() => {
      const usuario = usuarios.find(u => u.id === id);

      if (usuario) {
        resolve(usuario);         // Se encontró
      } else {
        reject(`No existe usuario con id ${id}`);  // No se encontró
      }

    }, 1000); // 1 segundo de "latencia"
  });
}


// ---------------------------------------------
// Función async que consume la promesa
// ---------------------------------------------
async function mostrarUsuario(id) {

  try {
    const usuario = await buscarUsuarioPorId(id);
    console.log("Usuario encontrado:", usuario);

  } catch (error) {
    console.error("Error:", error);
  }
}


// ---------------------------------------------
// Pruebas
// ---------------------------------------------
mostrarUsuario(2);   // ✓ Debería encontrarlo
mostrarUsuario(10);  // ✗ Debería lanzar error
