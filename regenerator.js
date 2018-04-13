
const program = require('commander');

const { createDir, createComp } = require('./commander');

program
  .version('0.0.1');

program
  .command('create a component <comp>')
  .alias('c')
  .option('-F')
  .description('create new directory')
  .action((name, type) => {
    const road = createDir(name);
    createComp(road, name, type);
  });

program.parse(process.argv);
