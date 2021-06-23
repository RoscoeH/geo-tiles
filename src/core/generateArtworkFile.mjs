import fs from "fs";
import generateArtwork from "./generateArtwork.mjs";
import { dateString } from "./utils.js";

const args = process.argv.slice(2);
const days = parseInt(args[0] || "1");

for (let i = 0; i < days; i++) {
  const date = dateString(-i);
  console.log(`Generating artwork for ${date}`);
  const artwork = generateArtwork({ date });
  const fileData = JSON.stringify(artwork);
  fs.writeFileSync(`src/artworks/${date}.json`, fileData);
}
