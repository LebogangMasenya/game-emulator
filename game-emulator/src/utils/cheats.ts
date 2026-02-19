// import cheat codes
import getCheatCodes from "./data";

export function checkCheatCode(pressedButtons: string[]) {
  const cheatCodes = getCheatCodes();
  for (const cheat of cheatCodes) {
    if (arraysEqual(pressedButtons.slice(-cheat.sequence.length), cheat.sequence)) { // arrays need to be the si
      return cheat.name;
    }
  }

    return "";
}

function arraysEqual(arg0: string[], sequence: string[]) {
    return JSON.stringify(arg0) === JSON.stringify(sequence);
}
