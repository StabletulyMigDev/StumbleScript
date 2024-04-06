function _init() {
    import { program }  from "commander";
    const program = new Command();

    program
    .name('StrumbleScript interpreter')
    .version('0.0.1')
    .action(function() {
        // add SS command prompt
    })

    program.command('load' *.ss)
    .description('load and run an especific *.ss file')
    .action(function() {
        // load *.ss file function
    })
}

function _config() {
    // SS configuration
    var enum
    export function enum = [
        OpenParen,
        CloseParen,
        Equals
    ]

    function tokenize() {
        // token function
    }
}
