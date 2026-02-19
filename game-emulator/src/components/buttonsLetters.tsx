interface ButtonsLettersProps {
    pressedButtons: string[];
    onButtonPress: (button: string) => void;
}
// when pressed, the buttons should be saved to the state of the emulator, so that the game can read them and react accordingly.
function ButtonsLetters({pressedButtons, onButtonPress}: ButtonsLettersProps) {
    return (
        <div className="buttons">
            <button className="button" onClick={() => onButtonPress("A")}>A</button>
            <button className="button" onClick={() => onButtonPress("B")}>B</button>
            <button className="button" onClick={() => onButtonPress("X")}>X</button>
            <button className="button" onClick={() => onButtonPress("Y")}>Y</button>
        </div>
    )
}


export default ButtonsLetters;