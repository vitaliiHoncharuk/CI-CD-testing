const core = require('@actions/core');

try {
  const name = core.getInput('who-to-greet');
  console.log(`Hello , ${name} !`);

  const time = new Date();
  core.setOutput('time', time.toString());
} catch (error) {
  core.setFailed(error.message);
}
