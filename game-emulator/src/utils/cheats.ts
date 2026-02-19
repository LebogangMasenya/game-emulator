// import cheat codes
function getCheatCodes() {
  const cheatCodes = [
    {
      name: 'GODMODE',
      sequence: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'B', 'A']
    },
    {
      name: 'INFINITE_AMMO',
      sequence: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'B', 'B']
    },
    {
      name: 'UNLOCK_ALL_LEVELS',
      sequence: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'A', 'A']
    }
  ]

  return cheatCodes;

}

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
