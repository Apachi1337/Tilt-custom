const core = require('actions/core')

try {
     const nameToGreet = core.getInput('who-to-greet');
     console.log(`Hello', ${nameToGreet}!`);
     core.setuOutput('time', new Date().toTimeString());
} catch (error) {
        core.setFailed(error.message);     

}