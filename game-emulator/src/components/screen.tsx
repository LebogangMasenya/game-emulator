import GameCanvas from "./gameCanvas";
function Screen({cheatsEnabled, currentButton}: {cheatsEnabled: string, currentButton?: string}) {
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