
const fs = require('fs');
const path = require('path');
const { fullRedux, stateLess } = require('../content/contents');

const createDir = (dir) => {
  // Create a src path
  const srcPath = path.join(__dirname, '../../../../src');
  // verify if srcPath exist?
  const srcPathExist = fs.existsSync(srcPath);
  // Create Components Path
  const componentsPath = path.join(__dirname, '../../../../src/components');
  // verify if componentsPath exist?
  const componentsPathExist = fs.existsSync(componentsPath);

  // Create mainPath if doest exist
  const mainPath = path.join(__dirname, `${componentsPath}/${dir}`);

  if (!componentsPathExist) {
    const road = `${componentsPath}/${dir}`;
    fs.mkdirSync(path.join(road));
  } 
  // else if (srcPathExist && !componentsPath) {
  //   const road = `${componentsPath}/${dir}`;
  //   fs.mkdirSync(path.join(road));
  // }
  return fs.mkdirSync(path.join(mainPath));
};


const content = (name, type) => {
  switch (type) {
    case 'stateLess':
      return stateLess(name);
    case 'reduxAll':
      return fullRedux(name);
    default:
  }
  return null;
};

const createComp = (road, comp, type) => {
  if (type) {
    fs.writeFileSync(path.join(road, `${comp}Container.jsx`), content(comp, type));
  } else {
    fs.writeFileSync(path.join(road, `${comp}.jsx`), content(comp, type));
  }
};


module.exports = { createDir, createComp };

