const core=require('@actions/core');
try {
  const name = core.getInput('nombre');
  const surname = core.getInput('apellido');
  const age = core.getInput('edad');
  //core.setOutput('output', `Processed: ${input}`);
  console.log(`Hola ${name} ${surname}, tienes ${age} años.`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}