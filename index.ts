import { program } from "commander";
const program = new Command();
function _init() {

    program
    .name('StrumbleScript interpreter')
    .version('0.0.1')
    .action(function() {
        // add SS command prompt
    })

    program.command('load')
    .description('load and run an especific *.ss file')
    .action(function() {
        // load *.ss file function
    })
}

function _config() {
    // SS configuration

    function tokenize() {
        // token function
    }
}
