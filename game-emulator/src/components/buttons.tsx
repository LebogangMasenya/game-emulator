
// when pressed, the buttons should be saved to the state of the emulator, so that the game can read them and react accordingly.
function Buttons() {
    return (
        <div className="buttons">
            <button className="button" onClick={() => console.log("A pressed")}>A</button>
            <button className="button" onClick={() => console.log("B pressed")}>B</button>
            <button className="button" onClick={() => console.log("X pressed")}>X</button>
            <button className="button" onClick={() => console.log("Y pressed")}>Y</button>
        </div>
    )
}


export default Buttons;