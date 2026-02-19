import Screen from "./screen";
import Controls from "./controls";
import {checkCheatCode} from '../utils/cheats';
import { useState } from "react";



export default function GamePad() {
    const [pressedButtons, setPressedButtons] = useState<string[]>([]);
    const handleButtonPress = (button: string) => {
        setPressedButtons(prev => {
            if (prev.includes(button)) {
                return prev.filter(b => b !== button);
            }
            return [...prev, button];
        });
    };
    
    return (        
        <div className="game-pad">
            <Screen cheatsEnabled={checkCheatCode(pressedButtons)} />
            <Controls pressedButtons={pressedButtons} onButtonPress={handleButtonPress} />
        </div>
    )
}