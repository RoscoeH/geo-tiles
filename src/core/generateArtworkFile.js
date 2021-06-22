import fs from "fs";
import generateArtwork from "./generateArtwork.js";
import { dateString } from "./utils.js";

const date = dateString();
const artwork = generateArtwork();
const fileData = JSON.stringify(artwork);

fs.writeFileSync(`src/artworks/${date}.json`, fileData);
