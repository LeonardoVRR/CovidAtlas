import { useState, useEffect } from "react";

function MapMaker({ clickCountry, positionMark: { left, top }, scaleMap }) {
  const markerHeight = (1 * window.innerHeight) / 100;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [posX, setPosX] = useState(left);
  const [posY, setPosY] = useState(top - markerHeight);

  useEffect(() => {
    setPosX(left);
  }, [clickCountry, left]);

  useEffect(() => {
    setPosY(top - markerHeight);
  }, [clickCountry, top]);

  useEffect(() => {
    setPosX(left * scaleMap);
    setPosY(top * scaleMap);
  }, [scaleMap]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      console.log("Janela redimensionada");
    };

    // Adiciona event listener para redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Limpeza do event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize.width, windowSize.height]);

  // const adjustedLeft = (left / 100) * windowSize.width;
  // const adjustedTop = (top / 100) * windowSize.height - markerHeight;

  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`absolute h-[4dvh] w-[3dvw] min-h-[4dvh] min-w-[3dvw] pointer-events-none z-20 ${
        clickCountry ? "block" : "hidden"
      }`}
      style={{
        left: `${posX}px`,
        top: `${posY}px`,
      }}
    >
      <path
        className="fill-red-500"
        fillRule="evenodd"
        d="M11.291 21.706 12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default MapMaker;
