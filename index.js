const fs = require("fs");
const ReadFile = require("./readFile");
const instance = new ReadFile(0, 0, "EAST");

try {
  const userCommands = fs
    .readFileSync("./commandDoc.txt", "utf8")
    .toString()
    .split("\n");
  userCommands.map((userCommand) => {
    if (userCommand.includes("PLACE")) {
      let positionArray = userCommand.substring(6).split(",");
      instance.place(+positionArray[0], +positionArray[1], positionArray[2]);
    } else {
      instance.commandRunner(userCommand);
    }
  });
} catch (err) {
  console.error(err);
}
