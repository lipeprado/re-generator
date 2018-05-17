
const fs = require('fs');
const path = require('path');
const { fullRedux, stateLess } = require('../content/contents');

const createDir = (dir) => {
  const road = path.join(__dirname, `../${dir}`);
  if (fs.existsSync(road)) return road;
  fs.mkdirSync(path.join(road));
  return road;
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

