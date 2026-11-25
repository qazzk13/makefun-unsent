import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "To: Lin, the girl who sat across from me on nights",
  "your thermos with the dented lid is still in my locker from march. i keep meaning to bring it down but your coat stopped being on the hook in april and i end up just standing there holding it",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
