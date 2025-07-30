const core=require('@actions/core');
try {
  const nombre = core.getInput('nombre');
  const apellido = core.getInput('apellido');
  const edad = core.getInput('edad');
  if (!nombre || !apellido || !edad) {
    throw new Error('Inputs "nombre", "apellido", and "edad" are required.');
  }
  //core.setOutput('output', `Processed: ${input}`);
  console.log(`Hola ${name} ${surname}, tienes ${age} años.`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}