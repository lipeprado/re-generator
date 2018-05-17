const inquirer = require('inquirer');


const questions = [
  {
    type: 'list',
    name: 'componentType',
    message: 'Qual tipo de component você deseja?',
    choices: [
      { name: 'Full + Redux', value: 'reduxAll' },
      { name: 'Full only with Constructor and State', value: 'constructor' },
      { name: 'Full + mapStateToProps', value: 'mapState' },
      { name: 'Full + mapDispatchToProps', value: 'mapDispatch' },
      { name: 'Stateless + PropTypes', value: 'stateLessProp' },
      { name: 'Stateless + PropTypes', value: 'stateLess' },
    ],
  },
  {
    type: 'input',
    name: 'directoryName',
    message: 'Qual nome do Diretorio?',
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'Qual nome do Component?',
  },
];

const inquired = () => inquirer.prompt(questions)
  .then(answers => answers);

module.exports = inquired;
