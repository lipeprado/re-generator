
const fs = require('fs');
const path = require('path');
const { fullComponent, stateLess } = require('./contents');

const createDir = (dir) => {
  const road = path.join(__dirname, dir);
  if (fs.existsSync(road)) return null;
  fs.mkdirSync(path.join(road));
  return road;
};

const content = (name, type) => {
  if (type) {
    const full = `${name}Container`;
    return fullComponent(full);
  }
  return stateLess(name);
};

const createComp = (road, comp, type) => {
  if (type) {
    fs.writeFileSync(path.join(road, `${comp}Container.jsx`), content(comp, type));
  } else {
    fs.writeFileSync(path.join(road, `${comp}.jsx`), content(comp, type));
  }
};

module.exports = { createDir, createComp };

