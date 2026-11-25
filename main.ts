import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "To: Lin, the girl who sat across from me on nights",
  "your blue thermos is still in my locker from march. i keep meaning to bring it down but your coat stopped being on the hook in april and i just stand there holding it like an idiot",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
