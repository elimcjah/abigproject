/**
 * Created by EliMcJah on 3/7/17.
 */

/**
 * This function should update a file of your choosing in your scheduler
 * folder.
 */
function updateFileInScheduler() {
    let fs = require('fs');
    fs.writeFileSync('student/elimcjah.txt', (new Date()).getTime());

    let d1 = (new Date(
        parseInt(fs.readFileSync('student/elimcjah.txt', 'UTF8'))));
    let d2 = (new Date());
    console.assert(Math.abs(d1.getTime() - d2.getTime()) < 5000);
}

/**
 * Kicks off bash script to perform commit on new changes.
 */
function kickOffAddCommitPushScript() {
    let cp = require('child_process');
    cp.execFileSync('push.sh');
}


updateFileInScheduler();
kickOffAddCommitPushScript();