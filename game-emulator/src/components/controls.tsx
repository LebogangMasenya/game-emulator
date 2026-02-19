// import direction buttons
import Buttons from "./buttons";
import { useMemo } from "react";

function Controls() {
    const buttonOrder = useMemo(() => ["A", "B", "X", "Y"], []);
    return (
        <div className="controls">
            <Buttons  />
            {/* add directional buttons */}
        </div>
    )
}

export default Controls;