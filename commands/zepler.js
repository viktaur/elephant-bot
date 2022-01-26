// this is definitely for linux, not sure for windows.
var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

var os = require('os');

var isWin = os.platform() === "win32";
// var isLin = os.platform() === "linux";

// For now it will only work for Linux

// if (isWin) {
//     // execute for windows
//     execute("arp a");
// } else {
//     // execute for linux
//     execute("");
// }

execute("arp -a");


const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

module.exports.getGitUser = async function getComputersOn () {
    // Exec output contains both stderr and stdout outputs
    var rawOutput = await exec('arp -a');
    // rawOutput: rawOutput.stdout.trim() // I'll leave it commented since I don't know what this does

    var outputArray = rawOutput.split("\n");
    
    console.log("The number of computers that are on right now is", outputArray);
    if (outputArray > 50) {
        console.log("ZEPLER IS CROWDED");
    } else {
        console.log("ZEPLER IS NOT CROWDED");
    }
};

