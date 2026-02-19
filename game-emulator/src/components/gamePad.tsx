import Screen from "./screen";
import Controls from "./controls";
import {checkCheatCode} from '../utils/cheats';
import { useState } from "react";


export default function GamePad() {
    const [pressedButtons, setPressedButtons] = useState<string[]>([]);

    const handleButtonPress = (button: string) => {
        setPressedButtons(prev => {
            return [...prev, button];
        });
    };

    console.log("Pressed Buttons in GamePad: ", pressedButtons);
   
    return (        
        <div className="game-pad">
            <Screen cheatsEnabled={checkCheatCode(pressedButtons)} currentButton={pressedButtons[pressedButtons.length - 1]} />
            <Controls pressedButtons={pressedButtons} onButtonPress={handleButtonPress} />
        </div>
    )
}