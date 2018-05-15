#!/usr/bin/env node

const program = require('commander');
const questions = require('./libs/questions');
const { createDir, createComp } = require('./command/commander');

program
  .version('0.0.1');
program
  .command('create a component')
  .alias('c')
  .description('create new directory')
  .action(async () => {
    const answers = await questions();
    const { directoryName, componentName, componentType } = answers;
    const road = await createDir(directoryName);
    createComp(road, componentName, componentType);
  });

program.parse(process.argv);
