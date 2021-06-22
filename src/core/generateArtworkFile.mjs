import fs from "fs";
import generateArtwork from "./generateArtwork.mjs";
import { dateString } from "./utils.mjs";

const date = dateString();
const artwork = generateArtwork();
const fileData = JSON.stringify(artwork);

fs.writeFileSync(`src/artworks/${date}.json`, fileData);
