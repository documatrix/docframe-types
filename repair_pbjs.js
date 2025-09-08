const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const regex = /^( *\* )@exports/;
rl.on('line', (line) => {
    process.stdout.write(line.replace(regex, `$1@name`) + "\n");
});

rl.once('close', () => {
     // end of input
 });

