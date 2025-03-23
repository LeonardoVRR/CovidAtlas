function SelectedCountryInfo({ selectedCountry }) {
  // const countryInfo = {
  //   updated: 1742603822222,
  //   country: "Brazil",
  //   countryInfo: {
  //     _id: 76,
  //     iso2: "BR",
  //     iso3: "BRA",
  //     lat: -10,
  //     long: -55,
  //     flag: "https://disease.sh/assets/img/flags/br.png",
  //   },
  //   cases: 38743918,
  //   todayCases: 0,
  //   deaths: 711380,
  //   todayDeaths: 0,
  //   recovered: 36249161,
  //   todayRecovered: 0,
  //   active: 1783377,
  //   critical: 0,
  //   casesPerOneMillion: 179908,
  //   deathsPerOneMillion: 3303,
  //   tests: 63776166,
  //   testsPerOneMillion: 296146,
  //   population: 215353593,
  //   continent: "South America",
  //   oneCasePerPeople: 6,
  //   oneDeathPerPeople: 303,
  //   oneTestPerPeople: 3,
  //   activePerOneMillion: 8281.16,
  //   recoveredPerOneMillion: 168323.92,
  //   criticalPerOneMillion: 0,
  // };

  // console.log("Pais selecionado");
  // console.log(selectedCountry);

  function toTitle(text) {
    const title = `${text[0].toUpperCase()}${text.slice(1)}`;
    return title.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  function generateRandomKey() {
    const newKey = Math.floor(Math.random() * 9999) + 1;
    return newKey;
  }

  return (
    <section
      key={`key-${generateRandomKey()}`}
      className="flex flex-col gap-2 relative w-full h-full"
    >
      <img
        src={selectedCountry.countryInfo.flag}
        alt="country flag"
        className="sticky top-0"
      />

      <div
        className="overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {Object.keys(selectedCountry).map((key, index) => {
          if (key !== "updated" && key !== "countryInfo") {
            const value = selectedCountry[key];
            return (
              <div key={index} className="p-2">
                <h2 className="text-xl font-bold text-red-500 w-full break-all">
                  {toTitle(key)}
                </h2>
                <p className="text-xl font-normal">{value}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default SelectedCountryInfo;
