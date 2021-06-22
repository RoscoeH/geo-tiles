import { random } from "lodash";

export function pickRandom(array) {
  return array[random(array.length - 1)];
}
