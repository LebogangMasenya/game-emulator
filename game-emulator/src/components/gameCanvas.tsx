import { useEffect, useRef } from "react";

export default function GameCanvas({
  currentButton,
}: {
  currentButton?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  console.log("Current Button in GameCanvas: ", currentButton);
  // Character State (keep this OUTSIDE React state for 60fps performance)
  const player = { x: 50, y: 150, color: "blue", action: "idle" };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const update = () => {
      // 1. Logic: Move player based on "Bubbled Down" props
      if (currentButton === "RIGHT") player.x += 0.5;
      if (currentButton === "LEFT") player.x -= 0.5;

      // console.log("Current Button in GameCanvas: ", currentButton);
      // 2. Cheat Logic: If 'A' and 'X' are pressed, player turns giant
      const isGiant = currentButton === "A" || currentButton === "X";

      // 3. Draw
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen

        // Draw Floor
        ctx.fillRect(0, 190, 400, 10);

        // Draw Player (Stickman)
        ctx.strokeStyle = player.color;
        ctx.lineWidth = isGiant ? 10 : 2;
        ctx.beginPath();
        ctx.arc(player.x, player.y, 10, 0, Math.PI * 2); // Head
        ctx.moveTo(player.x, player.y + 10);
        ctx.lineTo(player.x, player.y + 30); // Body
        ctx.stroke();
      }

      requestAnimationFrame(update);
    };

    update();
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
