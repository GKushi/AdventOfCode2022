import * as fs from "fs";

const data = fs.readFileSync(`${__dirname}/input.txt`, "utf8");

for (let i = 0; i < data.length; i++) {
  if (
    ![data.charAt(i), data.charAt(i + 1), data.charAt(i + 2)].includes(
      data.charAt(i + 3)
    ) &&
    ![data.charAt(i), data.charAt(i + 1), data.charAt(i + 3)].includes(
      data.charAt(i + 2)
    ) &&
    ![data.charAt(i), data.charAt(i + 2), data.charAt(i + 3)].includes(
      data.charAt(i + 1)
    ) &&
    ![data.charAt(i + 1), data.charAt(i + 2), data.charAt(i + 3)].includes(
      data.charAt(i)
    )
  ) {
    console.log(i + 4);
    break;
  }
}
