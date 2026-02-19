

export default function createButtonDirection({pressedButtons, setPressedButtons}: {pressedButtons: string[], setPressedButtons: React.Dispatch<React.SetStateAction<string[]>>}) {
    return (
         <div className="button-direction">
            <button className="up" onClick={() => console.log("up")}>up</button>
            <button className="right" onClick={() => console.log("right")}>right</button>
            <button className="down" onClick={() => console.log("down")}>down</button>
            <button className="left" onClick={() => console.log("left")}>left</button>
        </div>
    )
}