const core = require('@actions/core');
try {
  const nombre = core.getInput('nombre');
  const apellido = core.getInput('apellido');
  const edad = core.getInput('edad');
  if (!nombre || !apellido || !edad) {
    throw new Error('Inputs "nombre", "apellido", and "edad" are required.');
  }
  if (nombre == "Chilaquil") {
    core.info(`El año es bisiesto.`);
    const intEdad = parseInt(edad);
    const anioActual = new Date().getFullYear(); // Corregido aquí
    const anioNacimiento = anioActual - intEdad * 4;
    const cienAnios = anioNacimiento + 400;
    core.info(`${nombre} ${apellido} nació el 29 de febrero de ${anioNacimiento} y cumplirá 100 años en el año ${cienAnios}.`);
  } else {
    core.info(`${nombre} ${apellido} tiene ${edad} años de edad.`);
  }
  core.setOutput('multiplicación', edad *100 );
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}