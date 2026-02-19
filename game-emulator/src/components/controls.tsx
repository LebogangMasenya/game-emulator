// import direction buttons
import Buttons from "./buttons";
import { useState } from "react";

function Controls() {
    const [pressedButtons, setPressedButtons] = useState<string[]>([]);

    return (
        <div className="controls">
            <Buttons pressedButtons={pressedButtons} setPressedButtons={setPressedButtons} />
            {/* add directional buttons */}
        </div>
    )
}

export default Controls;