const range = require("lodash/range");
const random = require("lodash/random");
const TinyColor = require("@ctrl/tinycolor");

function pickRandom(array) {
  return array[random(array.length - 1)];
}

function dateString(offset) {
  const date = new Date();

  if (offset) {
    const offsetTime = 24 * 60 * 60 * 1000 * offset;
    date.setTime(date.getTime() + offsetTime);
  }

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, 0);

  return `${year}-${month}-${day}`;
}

function generateColors(numberOfColors) {
  return range(numberOfColors).map(() => TinyColor.random().toHexString());
}

module.exports = {
  pickRandom,
  dateString,
  generateColors,
};
