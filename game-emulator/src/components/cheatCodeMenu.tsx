import getCheatCodes from "../utils/data";

//This is going to return tghe values of the cheat codes this is something that we will be displaying on the right hand side of the screen apart of the components
export default function CheatCodeMenu(){
    const cheatsValues = [...getCheatCodes()];
    return (
        <div className="wrapperListValues">
            <ul className="listValues_ul">
                {cheatsValues.map((cheat) => {
                    return <li key={cheat.id}>{cheat.name}</li>
                })}
            </ul>
        </div>
    )
}