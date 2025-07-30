const core=require('@actions/core');
try {
  const name = core.getInput('nombre');
  const surname = core.getInput('apellido');
  const age = core.getInput('edad');
  if (!name || !surname || !age) {
    throw new Error('Inputs "nombre", "apellido", and "edad" are required.');
  }
  //core.setOutput('output', `Processed: ${input}`);
  console.log(`Hola ${name} ${surname}, tienes ${age} años.`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}