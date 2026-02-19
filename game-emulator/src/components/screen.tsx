import GameCanvas from "./gameCanvas";


function Screen({cheatsEnabled, currentButton}: {cheatsEnabled: string, currentButton?: string}) {
     //this component is responsible for displaying the fighter of the game library
    console.log("Cheats Enabled in Screen: ", currentButton);
    return (
        <>
            <div className="screen">
                <p>Nintendo</p>
                {cheatsEnabled.length > 0 && <p>Cheats Enabled: {cheatsEnabled}</p>}

                <div className="display">
                    <GameCanvas currentButton={currentButton} />
                </div>
            </div>

        </>
    );
};

export default Screen;