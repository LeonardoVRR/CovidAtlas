import { useState } from "react";
import "./App.css";
import CountryInfoModal from "../../components/CountryInfoModal/CountryInfoModal";
import SelectedCountryInfo from "../../components/SelectedCountryInfo/SelectedCountryInfo";
import WorldMap from "../../components/WorldMap/WorldMap";

function App() {
  let prevCountryName = null;

  const codeCountries = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CD: "Democratic Republic of the Congo",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: "Ivory Coast",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    SZ: "Eswatini",
    ET: "Ethiopia",
    FK: "Falkland Islands",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island and McDonald Islands",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KR: "South Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macau",
    MK: "North Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    KP: "North Korea",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestinian Territories",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    RE: "Réunion",
    BL: "Saint Barthélemy",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    KS: "Kosovo",
    LC: "Saint Lucia",
    MF: "Saint Martin",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "São Tomé and Príncipe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia and the South Sandwich Islands",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [clickCountry, setClickCountry] = useState(false);
  const [countryName, setCountryName] = useState(null);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [positionInfo, setPositionInfo] = useState({
    left: 0,
    top: 0,
  });

  function countryInformation(event) {
    const allCountries = event.currentTarget.querySelectorAll("path");
    const allCountriesArray = Array.from(allCountries);

    const mouseX = event.clientX; // Posição horizontal (em pixels)
    const mouseY = event.clientY; // Posição vertical (em pixels)

    if (event.target.tagName == "path") {
      const currentCountryName = event.target.dataset.countryname;
      const currentCountry = event.target.parentNode.querySelectorAll(
        `[data-countryname="${currentCountryName}"]`
      );

      // Obtendo a posição do elemento na página
      const rect = event.currentTarget.getBoundingClientRect();

      // Calculando a posição do mouse em relação ao elemento
      const mouseRelativeX = mouseX - rect.left;
      const mouseRelativeY = mouseY - rect.top;

      setPositionInfo({
        left: mouseRelativeX,
        top: mouseRelativeY,
      });

      // console.log(
      //   `Posição do mouse em relação ao elemento: X: ${mouseRelativeX}, Y: ${mouseRelativeY}`
      // );

      setCountryName(
        `${currentCountryName} (${findCodeCountry(
          codeCountries,
          currentCountryName
        )})`
      );
      setDisplayInfo(true);

      const currentCountryArray = Array.from(currentCountry);

      if (currentCountryName != prevCountryName) {
        allCountriesArray.forEach((country) => {
          if (country.dataset.countryname != currentCountryName) {
            country.classList.remove("fill-red-400");
          }
        });

        currentCountryArray.forEach((country) => {
          country.classList.add("fill-red-400");
        });

        prevCountryName = currentCountryName;
      }
    } else {
      setDisplayInfo(false);

      allCountriesArray.forEach((country) => {
        country.classList.remove("fill-red-400");
      });
    }
  }

  function selectedCountryInformation(event) {
    if (event.target.tagName == "path") {
      document.body.style.cursor = "pointer";
      const currentCountryName = event.target.dataset.countryname;
      const codeCountry = findCodeCountry(codeCountries, currentCountryName);

      if (
        currentCountryName == "Turkmenistan" ||
        currentCountryName == "Kosovo"
      ) {
        alert("Dados Indisponiveis");
      } else {
        getCountriesInfo(codeCountry.toLowerCase());
      }
    } else {
      setClickCountry(false);
    }
  }

  const findCodeCountry = (object, value) => {
    const entry = Object.entries(object).find(([key, val]) => val === value);
    return entry ? entry[0] : undefined; // Retorna a chave ou undefined se não encontrado
  };

  async function getCountriesInfo(codeCountry) {
    try {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${codeCountry}`
      );
      if (!response.ok) {
        alert("Erro na requisição");
        throw new Error("Erro na requisição");
      }
      const data = await response.json();
      //console.log(data);
      setSelectedCountry(data);
      setClickCountry(true);
    } catch (error) {
      console.error("Erro:", error);
      alert(`Erro ao obter os dados:\n${error}`);
    }
  }

  return (
    <div className="w-dvw h-dvh flex flex-col items-center bg-[#181a1b]">
      <article className="w-full h-full grid grid-rows-1 grid-cols-4 overflow-hidden">
        <section
          id="mapa_mundi"
          className="col-[1/4] relative"
          onMouseMove={countryInformation}
          onMouseDown={selectedCountryInformation}
        >
          <h1 className="text-4xl text-center text-white p-1">
            COVID-19 Worldwide
          </h1>
          <CountryInfoModal
            countryName={countryName}
            displayInfo={displayInfo}
            positionInfo={positionInfo}
          />

          <WorldMap clickCountry={clickCountry} />
        </section>
        <section
          id="country_info"
          className="col-start-4 bg-slate-400 flex items-center justify-center"
        >
          {clickCountry ? (
            <SelectedCountryInfo selectedCountry={selectedCountry} />
          ) : (
            <h1 className="text-3xl font-bold text-center">
              No country selected
            </h1>
          )}
        </section>
      </article>
    </div>
  );
}

export default App;
