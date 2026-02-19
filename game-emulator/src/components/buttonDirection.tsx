interface ButtonsLettersProps {
    pressedButtons: string[];
    onButtonPress: (button: string) => void;  
    // this is a callback function that will be called when a button is pressed,
    //  it will receive the button that was pressed as an argument, 
    // and it will be responsible for updating the state of the emulator with the new button press
}

export default function CreateButtonDirection({onButtonPress}: ButtonsLettersProps) {
    return (
        <div className="button-direction">
            <button className="up" onClick={() => onButtonPress("UP")}>▲</button>
            <button className="right" onClick={() => onButtonPress("RIGHT")}>▶</button>
            <button className="down" onClick={() => onButtonPress("DOWN")}>▼</button>
            <button className="left" onClick={() => onButtonPress("LEFT")}>◀</button>
        </div>
    );
};