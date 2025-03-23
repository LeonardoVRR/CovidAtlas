import React, { useState, useLayoutEffect, useRef } from "react";

function CountryInfoModal({
  countryName,
  displayInfo,
  positionInfo: { left, top },
}) {
  // Referência para o elemento article
  const articleRef = useRef(null);

  // Estado para armazenar as dimensões do article
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Usando useLayoutEffect para pegar o tamanho após renderização
  useLayoutEffect(() => {
    if (articleRef.current) {
      setSize({
        width: articleRef.current.offsetWidth,
        height: articleRef.current.offsetHeight,
      });
    }
  }, [displayInfo, countryName]); // Reexecuta quando displayInfo mudar

  // if (displayInfo) {
  //   console.log(`width: ${size.width}, height: ${size.height}`);
  // }

  return (
    <article
      ref={articleRef} // Referência ao elemento
      style={{
        left: `${left - (size.width / 100) * 50}px`,
        top: `${top - 5 - size.height}px`,
      }}
      className={`absolute border-1 border-solid border-black w-[150px] text-center pointer-events-none bg-white z-50 p-1 select-none ${
        displayInfo ? "block" : "hidden"
      }`}
    >
      <h1 className="text-lg break-words">{countryName}</h1>
    </article>
  );
}

//   {/* Exibe as dimensões do article (width e height) */}
//   {displayInfo && (
//     <p>
//       Width: {size.width}px, Height: {size.height}px
//     </p>
//   )}

export default CountryInfoModal;
