# Game Emulator - Proof of Concept

A retro-style game emulator POC built with React and TypeScript that demonstrates state management of button inputs affecting real-time screen interactions. This project showcases how button presses can dynamically control an on-screen character and activate special cheat codes.

## 🎮 Overview

This is a simple but interactive game emulator featuring:
- **Stickman character** that responds to directional controls and action buttons
- **Real-time canvas rendering** using HTML5 Canvas API
- **Cheat code system** with classic Konami-style button sequences
- **Dynamic visual effects** based on button states and cheat activation
- **POC of React state-driven UI** - demonstrates how `useState` for button tracking directly affects canvas rendering

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running the Game

```bash
npm run dev
```

The game will start in development mode at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎯 Game Controls

### Movement
- **UP Arrow** - Move character up
- **DOWN Arrow** - Move character down
- **LEFT Arrow** - Move character left
- **RIGHT Arrow** - Move character right

### Actions
- **A Button** - Throw (uses ammo)
- **B Button** - Special ability
- **X Button** - Attack
- **Y Button** - Defend

## 🎁 Cheat Codes

The game features three special cheat codes activated by pressing specific button sequences:

### 1. **GODMODE** 🛡️
Sequence: `UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A`
- Makes the player character larger (3x size)
- Enables invulnerability mode

### 2. **INFINITE AMMO** 🔫
Sequence: `UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B B`
- Sets ammo to 999
- Never runs out of ammunition

### 3. **INVISIBILITY** 👻
Sequence: `UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT A A`
- Makes the character invisible
- Enables stealth mode

## 🎨 Visual Feedback

### Character Colors
- **Blue** - Idle/normal state
- **Red** - Attacking
- **Green** - Defending
- **Purple** - Special ability active
- **Black** - Throwing projectile
- **Transparent** - Invisibility cheat active

### Ammo System
- You start with **10 ammo**
- Each throw action costs 1 ammo
- Ammo is displayed on screen
- Use the **INFINITE_AMMO** cheat to get 999 ammo

## 💡 Technical POC Highlights

This project demonstrates key React patterns:

### State Management
- Button presses are tracked in a `buttonList` state array
- The game canvas listens to `currentButton` state changes via `useEffect`
- Canvas rendering is triggered by button state updates without unnecessary re-renders

### Real-time Interaction
- Uses `requestAnimationFrame` for smooth 60fps canvas updates
- Character movement and state changes happen immediately when buttons are pressed
- Cheat code detection runs continuously, checking the last N button presses

### Component Architecture
- **GameCanvas** - Core game logic and rendering
- **Controls** - Button input handling
- **CheatCodeMenu** - Displays available cheats
- Supporting components for different input methods

### Cheat Code Detection
The cheat system checks if the last N button presses match a known cheat sequence:
```typescript
// Example: Check if last 10 presses match GODMODE sequence
checkCheatCode(['UP', 'UP', 'DOWN', 'DOWN', 'LEFT', 'RIGHT', 'LEFT', 'RIGHT', 'B', 'A'])
// Returns: 'GODMODE'
```

## 📁 Project Structure

```
src/
├── components/
│   ├── gameCanvas.tsx          # Main game loop and rendering
│   ├── controls.tsx            # Control input handling
│   ├── gamePad.tsx             # Virtual gamepad UI
│   ├── buttonDirection.tsx      # Directional button component
│   ├── buttonsLetters.tsx       # Action button component
│   ├── cheatCodeMenu.tsx        # Cheat code display
│   └── screen.tsx              # Screen layout
├── utils/
│   ├── cheats.ts               # Cheat code validation logic
│   └── data.ts                 # Cheat code definitions
└── App.tsx                     # Main application
```

## 🧪 Testing Cheats

To test a cheat code:
1. Run the game with `npm run dev`
2. Use the on-screen buttons or keyboard to input the sequence
3. For example, to activate GODMODE: press UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A in sequence
4. The character should visually change when the cheat is activated
5. Check the Cheat Code Menu to see all available sequences

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎓 Learning Outcomes

This POC demonstrates:
- ✅ Real-time state-driven UI updates
- ✅ Canvas API integration with React
- ✅ Button sequence pattern matching
- ✅ useRef for non-state-triggering updates
- ✅ useEffect for side effects and canvas rendering
- ✅ TypeScript in a React context

## 🚧 Future Enhancements

Potential improvements for this POC:
- Sound effects for actions and cheat activation
- More complex enemies/NPCs
- Score/health system
- Multiple levels
- Persistent cheat code history
- Mobile touch controls optimization
