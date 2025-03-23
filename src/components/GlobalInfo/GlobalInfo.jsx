import { useState, useEffect, useRef } from "react";
import "./GlobalInfo.css";
import textFit from "textfit";

function GlobalInfo() {
  const [globalInfoCases, setGlobalInfoCases] = useState([]);
  const [totalGlobalCases, setTotalGlobalCases] = useState(0);
  const [infoAvailable, setInfoAvailable] = useState(false);
  const [globalInfoCasesAvailable, setGlobalInfoCasesAvailable] =
    useState(false);

  const globalInfoCasesTXT = useRef(null);

  const getGlobalInfo = async (info) => {
    try {
      const response = await fetch(`https://disease.sh/v3/covid-19/${info}`);

      if (!response.ok) {
        info == "countries"
          ? setInfoAvailable(false)
          : setGlobalInfoCasesAvailable(false);
        throw new Error("Erro na requisição");
      }

      const data = await response.json();

      if (info == "countries") {
        // Atualiza o estado com os dados dos países e casos
        setGlobalInfoCases(
          data.map((country) => ({
            country: country.country,
            cases: country.cases,
          }))
        );
        setInfoAvailable(true);
      } else if (info == "all") {
        //setTotalGlobalCases(data.cases);
        setTotalGlobalCases(704753890000);
        setGlobalInfoCasesAvailable(true);
      }
    } catch (error) {
      console.error("Erro:", error);
      info == "countries"
        ? setInfoAvailable(false)
        : setGlobalInfoCasesAvailable(false);
    }
  };

  function formattedNumber(number) {
    return new Intl.NumberFormat("en-US").format(number);
  }

  // Chama a função de obtenção de dados uma vez quando o componente for montado
  useEffect(() => {
    getGlobalInfo("countries");
    getGlobalInfo("all");
  }, []);

  useEffect(() => {
    if (globalInfoCasesTXT.current != null) {
      console.log("Carregado");
      textFit(globalInfoCasesTXT.current, {
        alignHoriz: true,
        alignVert: true,
      });
    }
  }, [globalInfoCasesTXT.current]);

  return (
    <div
      id="GlobalInfo_container"
      className="w-full h-full grid grid-cols-1 grid-rows-5 gap-1"
    >
      <section className="bg-[#222222] row-[1] relative">
        {globalInfoCasesAvailable ? (
          <div className="w-full h-full p-2 text-center flex flex-col justify-center items-center gap-6 overflow-hidden">
            <h1>Total Confirmed</h1>
            <p
              ref={globalInfoCasesTXT}
              className="text-red-500 text-5xl font-semibold w-full"
            >
              {formattedNumber(totalGlobalCases)}
            </p>
          </div>
        ) : (
          <p className="text-center text-3xl font-bold w-full absolute top-[50%] transform -translate-y-1/2 text-white">
            Loading...
          </p>
        )}
      </section>
      <section className="bg-[#222222] row-[2/-1] flex flex-col items-center gap-2 relative">
        <h1>
          Confirmed Cases by <br /> Country
        </h1>
        {infoAvailable ? (
          <ul
            className="overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            {globalInfoCases.map((info, index) => {
              return (
                <li
                  key={index}
                  className="px-2 py-1 text-lg text-white border border-t-0 border-b-2 border-l-0 border-r-0 border-[#2f2f2f]"
                >
                  <span className="font-bold text-red-500">
                    {formattedNumber(info.cases)}
                  </span>{" "}
                  {info.country}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center text-3xl font-bold w-full absolute top-[50%] transform -translate-y-1/2 text-white">
            Loading...
          </p>
        )}
      </section>
    </div>
  );
}

export default GlobalInfo;
