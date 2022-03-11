class ReadFile {
  constructor(xIndex, yIndex, fDirection) {
    this.xIndex = xIndex;
    this.yIndex = yIndex;
    this.fDirection = fDirection;
  }
  static isValidMove(x, y, direction) {
    switch (direction) {
      case "SOUTH":
        return y > 0;
        break;
      case "NORTH":
        return y < 5;
        break;
      case "EAST":
        return x < 5;
        break;
      case "WEST":
        return x > 0;
        break;
      default:
        console.log("This Direction is not a true direction");
        return false;
    }
  }
  place(x, y, f) {
    this.xIndex = x;
    this.yIndex = y;
    this.fDirection = f;
  }
  commandRunner(command) {
    switch (command) {
      case "RIGHT":
        console.log("Robot Turned clockWise");
        break;
      case "MOVE":
        if (ReadFile.isValidMove(this.xIndex, this.yIndex, this.fDirection)) {
          if (this.fDirection === "NORTH") {
            this.yIndex += 1;
          }
          if (this.fDirection === "SOUTH") {
            this.yIndex -= 1;
          }
          if (this.fDirection === "EAST") {
            this.xIndex += 1;
          }
          if (this.fDirection === "WEST") {
            this.xIndex -= 1;
          }
        } else {
          console.log("robot is not allowed to move out of the page");
        }
        break;
      case "LEFT":
        console.log("Robot Turned unti clockWise");
        break;
      case "PLACE":
        console.log("Place command run");
        break;
      case "REPORT":
        console.log(
          `Robot is in ${this.xIndex}X ${this.yIndex}Y ${this.fDirection}F`
        );
        break;
      default:
        console.log("not a command");
    }
  }
}
module.exports = ReadFile;
