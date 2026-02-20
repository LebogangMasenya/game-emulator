import Screen from "./screen";
import Controls from "./controls";
import { checkCheatCode } from "../utils/cheats";
import { useState } from "react";
import CheatCodeMenu from "./cheatCodeMenu";

export default function GamePad() {
  const [pressedButtons, setPressedButtons] = useState<string[]>([]);

  const handleButtonPress = (button: string) => {
    setPressedButtons((prev) => {
      return [...prev, button];
    });
  };

  console.log("Pressed Buttons in GamePad: ", pressedButtons);
  return (
    <div className="wrapperGamePad">
      <div className="game-pad">
        <Screen
          buttonList={pressedButtons}
          cheatsEnabled={checkCheatCode(pressedButtons)}
          currentButton={pressedButtons[pressedButtons.length - 1]}
        />
        <Controls
          pressedButtons={pressedButtons}
          onButtonPress={handleButtonPress}
        />
      </div>
      <div>
        <CheatCodeMenu />
      </div>
    </div>
  );
}
