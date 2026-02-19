import Screen from "./screen";
import Controls from "./controls";

export default function GamePad() {
    return (
        <div className="game-pad">
            <Screen cheatsEnabled={"God Mode"} />
            <Controls />
        </div>
    )
}