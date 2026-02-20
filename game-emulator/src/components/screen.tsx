import GameCanvas from "./gameCanvas";

function Screen({
  cheatsEnabled,
  buttonList,
  currentButton,
}: {
  cheatsEnabled: string;
  buttonList: string[];
  currentButton?: string;
}) {
  //this component is responsible for displaying the fighter of the game library
  return (
    <>
      <div className="screen">
        <p>Nintendo</p>
        {cheatsEnabled.length > 0 && <p>Cheats Enabled: {cheatsEnabled}</p>}

        <div className="display">
          <GameCanvas buttonList={buttonList} currentButton={currentButton} />
        </div>
      </div>
    </>
  );
}

export default Screen;
