export default function CreateButtonDirection({pressedButtons, setPressedButtons}: {pressedButtons: string[], setPressedButtons: React.Dispatch<React.SetStateAction<string[]>>}) {
    return (
        <div className="button-direction">
            <button className="up" onClick={() => setPressedButtons(prev => [...prev, "UP"])}>▲</button>
            <button className="right" onClick={() => setPressedButtons(prev => [...prev, "RIGHT"])}>▶</button>
            <button className="down" onClick={() => setPressedButtons(prev => [...prev, "DOWN"])}>▼</button>
            <button className="left" onClick={() => setPressedButtons(prev => [...prev, "LEFT"])}>◀</button>
        </div>
    );
};