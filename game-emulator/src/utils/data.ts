export default function getCheatCodes() {
  const cheatCodes = [
    {
      id: 1,
      name: 'GODMODE',
      sequence: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'B', 'A']
    },
    {
      id: 2,
      name: 'INFINITE_AMMO',
      sequence: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'B', 'B']
    },
    {
      id: 3,
      name: 'UNLOCK_ALL_LEVELS',
      sequence: ['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'A', 'A']
    }
  ]
  return cheatCodes;
}