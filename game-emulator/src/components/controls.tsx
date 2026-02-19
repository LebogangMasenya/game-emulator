// import direction buttons
import Buttons from "./buttons";
import { useState } from "react";
import CreateButtonDirection from "./buttonDirection";

function Controls() {
    const [pressedButtons, setPressedButtons] = useState<string[]>([]);

    return (
        <div className="controls">
            <Buttons pressedButtons={pressedButtons} setPressedButtons={setPressedButtons} />
            <CreateButtonDirection pressedButtons={pressedButtons} setPressedButtons={setPressedButtons} />
        </div>
    )
}

export default Controls;