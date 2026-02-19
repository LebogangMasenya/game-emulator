

function Screen({cheatsEnabled}: {cheatsEnabled: string}) {
    return (
        <>
            <div className="screen">
                <p>Screen</p>
                {cheatsEnabled.length > 0 && <p>Cheats Enabled: {cheatsEnabled}</p>}

                <div className="display">
            
                </div>
            </div>

        </>
    )
}

export default Screen;