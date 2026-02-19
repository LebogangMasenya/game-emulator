// import direction buttons
import ButtonsLetters from "./buttonsLetters";
import CreateButtonDirection from "./buttonDirection";

interface ButtonsLettersProps {
    pressedButtons: string[];
    onButtonPress: (button: string) => void;  
    // this is a callback function that will be called when a button is pressed,
    //  it will receive the button that was pressed as an argument, 
    // and it will be responsible for updating the state of the emulator with the new button press
}

function Controls({pressedButtons, onButtonPress}: ButtonsLettersProps) {
    return (
        <div className="controls">
            <ButtonsLetters pressedButtons={pressedButtons} onButtonPress={onButtonPress} />
            <CreateButtonDirection pressedButtons={pressedButtons} onButtonPress={onButtonPress} />
        </div>
    )
}


export default Controls;