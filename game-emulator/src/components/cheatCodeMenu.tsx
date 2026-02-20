import getCheatCodes from "../utils/data";
import { useState } from "react";
//This is going to return tghe values of the cheat codes this is something that we will be displaying on the right hand side of the screen apart of the components
export default function CheatCodeMenu(){
    const cheatsValues = [...getCheatCodes()];
    const [cheats, setCheats] = useState<number | null>(null);

    const toggleCheats = (id: number) => {
        setCheats(prev => (prev === id ? null : id));
    }


    return (
        <div className="wrapperListValues">
            <ul className="listValues_ul">
                {cheatsValues.map((cheat) => {

                    return <li key={cheat.id}
                    className={`cheat-item ${cheats === cheat.id ? 'active' : ''}`}
                    onClick={() => toggleCheats(cheat.id)}
                    >
                        <div className="cheat-title">{cheat.name}</div>
                        {cheats === cheat.id && (
                            <div className="cheat-content">
                                {cheat.sequence.map((code, index) => (
                                    <p key={index}>{code}</p>
                                ))}
                            </div>
                        )}
                        
                    </li>

                })}
            </ul>
        </div>
    )
}