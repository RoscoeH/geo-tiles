import lodash from "lodash";
const { random } = lodash;

export function pickRandom(array) {
  return array[random(array.length - 1)];
}

export function dateString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, 0);

  return `${year}-${month}-${day}`;
}
