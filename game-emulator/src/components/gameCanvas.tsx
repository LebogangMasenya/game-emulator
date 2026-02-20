import { useEffect, useRef } from "react";
import { checkCheatCode } from "../utils/cheats";

// import cheatcode logic

export default function GameCanvas({
  buttonList,
  currentButton,
}: {
  buttonList: string[];
  currentButton?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Character State, so we can refer later
  const player = useRef({
    x: 50,
    y: 150,
    color: "blue",
    action: "idle",
    ammo: 10,
  }); // to track player position and state, without causing re-renders

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationID: number;

    const update = () => {
      if (currentButton === "RIGHT" && player.current.x < 300)
        player.current.x += 4;
      if (currentButton === "LEFT" && player.current.x > 10)
        player.current.x -= 4;
      if (currentButton === "UP" && player.current.y > 10)
        player.current.y -= 4;
      if (currentButton === "DOWN" && player.current.y < 190)
        player.current.y += 4; // good gaurds to prevent moving out of canvas bounds

      if (currentButton === "A") player.current.action = "throw";
      if (currentButton === "X") player.current.action = "attack";
      if (currentButton === "Y") player.current.action = "defend";
      if (currentButton === "B") player.current.action = "special";

      switch (player.current.action) {
        case "throw":
          player.current.ammo = Math.max(0, player.current.ammo - 1); // Decrease ammo but not below 0
          player.current.color = "black";
          break;
        case "attack":
          player.current.color = "red";
          break;
        case "defend":
          player.current.color = "green";
          break;
        case "special":
          player.current.color = "purple";
          break;
        default:
          player.current.color = "blue";
      }

      const isGodMode = checkCheatCode(buttonList) === "GODMODE";
      const infiniteAmmo = checkCheatCode(buttonList) === "INFINITE_AMMO";
      const isInvisible = checkCheatCode(buttonList) === "INVISIBILITY";

      const isGiant = isGodMode; // For simplicity, only GODMODE makes the player giant

      if (infiniteAmmo) {
        player.current.ammo = 999; // Set ammo to a high number for infinite ammo cheat
      }

      if (isInvisible) {
        player.current.color = "transparent";
        player.current.action = "invisible";
      }

      // 3. Draw
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen

        // Draw Floor
        ctx.fillRect(0, 190, 400, 10);

        // Draw Player (Stickman)
        ctx.strokeStyle = player.current.color;
        ctx.lineWidth = isGiant ? 10 : 2;
        ctx.beginPath();
        ctx.arc(player.current.x, player.current.y, 10, 0, Math.PI * 2); // Head
        ctx.moveTo(player.current.x, player.current.y + 10);
        ctx.lineTo(player.current.x, player.current.y + 30); // Body
        ctx.stroke();

        // throwing action visualization
        if (player.current.action === "throw") {
          ctx.fillStyle = "black";
          ctx.beginPath();
          ctx.arc(
            player.current.x + 20,
            player.current.y + 10,
            5,
            0,
            Math.PI * 2,
          ); // Simple projectile
          ctx.fill();
        }
      }

      animationID = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(animationID);
    };
  }, [currentButton]); // Re-run logic when currentButton changes

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={200}
      style={{ border: "1px solid white" }}
    />
  );
}
