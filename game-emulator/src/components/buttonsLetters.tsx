interface ButtonsLettersProps {
    pressedButtons: string[];
    onButtonPress: (button: string) => void;
}

// when pressed, the buttons should be saved to the state of the emulator, so that the game can read them and react accordingly.
function ButtonsLetters({pressedButtons, onButtonPress}: ButtonsLettersProps) {
    return (
        <div className="buttons">
            <button className="a" onClick={() => onButtonPress("A")}>A</button>
            <button className="b" onClick={() => onButtonPress("B")}>B</button>
            <button className="x" onClick={() => onButtonPress("X")}>X</button>
            <button className="y" onClick={() => onButtonPress("Y")}>Y</button>
        </div>
    )
}


export default ButtonsLetters;