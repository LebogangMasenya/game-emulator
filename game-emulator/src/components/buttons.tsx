
// when pressed, the buttons should be saved to the state of the emulator, so that the game can read them and react accordingly.
function Buttons({pressedButtons, setPressedButtons}: {pressedButtons: string[], setPressedButtons: React.Dispatch<React.SetStateAction<string[]>>}) {
    return (
        <div className="buttons">
            <button className="button" onClick={() => setPressedButtons(prev => [...prev, "A"])}>A</button>
            <button className="button" onClick={() => setPressedButtons(prev => [...prev, "B"])}>B</button>
            <button className="button" onClick={() => setPressedButtons(prev => [...prev, "X"])}>X</button>
            <button className="button" onClick={() => setPressedButtons(prev => [...prev, "Y"])}>Y</button>
        </div>
    )
}


export default Buttons;