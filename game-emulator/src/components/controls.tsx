// import direction buttons
import Buttons from "./buttonsLetters";
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
            <Buttons pressedButtons={pressedButtons} onButtonPress={onButtonPress} />
            {/* add directional buttons */}
        </div>
    )
}


export default Controls;