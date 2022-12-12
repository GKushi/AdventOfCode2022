import * as fs from "fs";

const data = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

function unique(str: string): boolean {
  const uniqueCharacters = new Set<string>();
  for (let i = 0; i < str.length; i++) {
    if (uniqueCharacters.has(str.charAt(i))) {
      return false;
    }
    uniqueCharacters.add(str.charAt(i));
  }

  return true;
}
for (let i = 0; i < data.length; i++) {
  let draft = data.slice(i, i + 14);

  if (unique(draft)) {
    console.log(i + 14);
    break;
  }
}
