export default function CreateButtonDirection({pressedButtons, setPressedButtons}: {pressedButtons: string[], setPressedButtons: React.Dispatch<React.SetStateAction<string[]>>}) {
    return (
        <div className="button-direction">
            <button className="up" onClick={() => setPressedButtons(prev => [...prev, "UP"])}>up</button>
            <button className="right" onClick={() => setPressedButtons(prev => [...prev, "RIGHT"])}>right</button>
            <button className="down" onClick={() => setPressedButtons(prev => [...prev, "DOWN"])}>down</button>
            <button className="left" onClick={() => setPressedButtons(prev => [...prev, "LEFT"])}>left</button>
        </div>
    );
};