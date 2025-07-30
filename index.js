const core=require('@actions/core');
try {
  const name = core.getInput('name');
  if (!name) {
    throw new Error('Input is required');
  }
  //core.setOutput('output', `Processed: ${input}`);
  console.log(`Hola, ${name}!`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}