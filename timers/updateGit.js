/**
 * Created by EliMcJah on 3/6/17.
 */

console.log("yah");

module.exports = {
    'callbackFn': function() {
        //console.log("made it ");
        require('child_process').execSync('node ./2017-03-06/update.js');

    },
    'id': 1234,
    'interval': 5000
    }