
function Screen({cheatsEnabled}: {cheatsEnabled: string}) {
    //this component is responsible for displaying the fighter of the game library
    return (
        <>
            <div className="screen">
                <p>Nintendo</p>
                {cheatsEnabled.length > 0 && <p>Cheats Enabled: {cheatsEnabled}</p>}

                <div className="display">
            
                </div>
            </div>

        </>
    );
};

export default Screen;