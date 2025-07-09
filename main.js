const map = document.querySelector("svg");
const countries = document.querySelectorAll("path"); // Fix: get all countries
const sidePanel = document.querySelector(".side-panel");
const container = document.querySelector(".side-panel .container");
const closeBtn = document.querySelector(".close-btn");
const loading = document.querySelector(".loading");
const zoomInBtn = document.querySelector(".zoom-in");
const zoomOutBtn = document.querySelector(".zoom-out");
const zoomValueOutput = document.querySelector(".zoom-value");

const countryNameOutput = document.querySelector(".country-name");
const countryFlagOutput = document.querySelector(".country-flag");
const cityOutput = document.querySelector(".city");
const areaOutput = document.querySelector(".area");
const currencyOutput = document.querySelector(".currency");
const languagesOutput = document.querySelector(".languages");

const continentColors = {
    Africa: "#FFB347",         // orange
    Europe: "#779ECB",         // blue
    Asia: "#FF6961",           // red
    NorthAmerica: "#77DD77",   // green
    LatinAmerica: "#CBAACB",   // purple
    Other: "#fff"           // gray fallback
};

const africanCountries = ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros",
    "Republic of Congo", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
    "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique",
    "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan",
    "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe", "Western Sahara"];

const europeanCountries = ["Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia",
    "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", 
    "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];

const asianCountries = ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Georgia", "India", "Indonesia", "Iran",
    "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman",
    "Pakistan", "Palestine", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste",
    "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];

const northAmericanCountries = ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada",
    "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago",
    "United States"];

const latamCountries = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];

countries.forEach(country => {
    const countryName = country.getAttribute("name");
    if (!countryName) return;

    const continent = getContinent(countryName);
    const color = continentColors[continent] || continentColors.Other;

    country.style.fill = color;
    country.setAttribute("data-original-fill", color);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getContinent(country) {
    if (africanCountries.includes(country)) return "Africa";
    if (europeanCountries.includes(country)) return "Europe";
    if (asianCountries.includes(country)) return "Asia";
    if (northAmericanCountries.includes(country)) return "NorthAmerica";
    if (latamCountries.includes(country)) return "LatinAmerica";
    return "Other";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const orgPartners = {};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const afrPartner1 = `<a href="https://secam.org/" target="_blank" style="color: white; text-decoration: underline;">
    SECAM - Symposium of Episcopal Conferences of Africa and Madagascar
</a>`;

africanCountries.forEach(country => {
    if (country === "Insert Specific country") {
        orgPartners[country] = {
            partners: [
                afrPartner1,
                "STEM education support",
            ]
        };
    } else if (!orgPartners[country]) {
        orgPartners[country] = {
            partners: [afrPartner1]
        };
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const euPartner1 = `<a href="https://www.comece.eu/" target="_blank" style="color: white; text-decoration: underline;">
    COMECE - Commission of the Bishops' Conferences of the European Union</a>`;

const euPartner2 = `<a href="https://www.ccee.eu/ccee/conferenze-episcopali/" target="_blank" style="color: white; text-decoration: underline;">
    Consiglio Conferenze Episcopali Europee</a>`;

const euPartner3 = `<a href="https://www.caritas.eu/" target="_blank" style="color: white; text-decoration: underline;">
    Caritas Europa</a>`;

europeanCountries.forEach(country => {
    if (country === "Sweden" || country === "Denmark" || country === "Finland" || country === "Norway" || country === "Iceland") {
        orgPartners[country] = {
            partners: [
                euPartner1, euPartner2, euPartner3,
                "The Nordic Council", "Nordic Bishop Conference"
            ]
        };
    }
    else if (country === "United Kingdom") {
        orgPartners[country] = {
            partners: [
                euPartner1, euPartner2, euPartner3,
                "Greater Manchester Combined Authority", "Bishops Conference of England and Wales", "Women at the Well"
            ]
        };
    }
    else if (country === "Ireland") {
        orgPartners[country] = {
            partners: [
                euPartner1, euPartner2, euPartner3,
                "PSNI - Police Service of Northern Ireland", "An Garda Sciochana"
            ]
        };
    }
    else if (country === "Germany") {
        orgPartners[country] = {
            partners: [
                euPartner1, euPartner2, euPartner3,
                "German Bishops’ Conference"
            ]
        };
    }
    else if (!orgPartners[country]) {
        orgPartners[country] = {
            partners: [euPartner1, euPartner2, euPartner3]
        };
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const asPartner1 = `<a href="https://fabc.org/" target="_blank" style="color: white; text-decoration: underline;">
    FABC - Federation of Asian Bishops' Conferences</a>`;

asianCountries.forEach(country => {
    if (country === "Insert Specific country") {
        orgPartners[country] = {
            partners: [
                asPartner1,
                "STEM education support",
            ]
        };
    } else if (!orgPartners[country]) {
        orgPartners[country] = {
            partners: [asPartner1]
        };
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const latamPartner1 = `<a href="https://celam.org/" target="_blank" style="color: white; text-decoration: underline;">
    CELAM - Consejo Episcopal Latinoamericano y Caribeño</a>`;

const latamPartner2 = `<a href="https://redclamor.org/" target="_blank" style="color: white; text-decoration: underline;">
    Red CLAMOR - Red Eclesial Latinoamericana y Caribeña de Migración, Desplazamiento, Refugio y Trata de Personas</a>`;

latamCountries.forEach(country => {
    if (country === "Argentina") {
        orgPartners[country] = {
            partners: [
                latamPartner1, latamPartner2,
                "Argentinian Federal Police, Policía Federal Argentina",
            ]
        };
    } else if (!orgPartners[country]) {
        orgPartners[country] = {
            partners: [latamPartner1, latamPartner2]
        };
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
countries.forEach(country => {
    country.addEventListener("mouseenter", function () {
        const countryName = this.getAttribute("name");
        if (!countryName) return;
        const matchingElements = document.querySelectorAll(`path[name="${countryName}"]`);
        matchingElements.forEach(el => {
            el.style.fill = "#c99aff";
        });
    });

    country.addEventListener("mouseout", function () {
        const countryName = this.getAttribute("name");
        if (!countryName) return;
        const matchingElements = document.querySelectorAll(`path[name="${countryName}"]`);
        matchingElements.forEach(el => {
            el.style.fill = el.getAttribute("data-original-fill") || "#fff";
        });
    });





    country.addEventListener("click", function (e) {
        loading.innerText = "Loading...";
        container.classList.add("hide");
        loading.classList.remove("hide");

        let clickedCountryName;
        if (e.target.hasAttribute("name")) {
            clickedCountryName = e.target.getAttribute("name");
        } else {
            clickedCountryName = e.target.classList.value;
        }

        sidePanel.classList.add("side-panel-open");

        // Fix: use backticks for template string
        fetch(`https://restcountries.com/v3.1/name/${clickedCountryName}?fullText=true`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                setTimeout(() => {
                    const countryData = data[0];
                    countryNameOutput.innerText = countryData.name.common;
                    countryFlagOutput.src = countryData.flags.png;

                    // Fix: use innerText, not src, and access capital safely
                    cityOutput.innerText = countryData.capital ? countryData.capital[0] : "N/A";

                    const formattedNumber = countryData.area.toLocaleString('de-DE');
                    areaOutput.innerHTML = `${formattedNumber} km<sup>2</sup>`;

                    // Currencies
                    const currencies = countryData.currencies;
                    currencyOutput.innerHTML = "";
                    Object.keys(currencies).forEach(key => {
                        currencyOutput.innerHTML += `<li>${currencies[key].name}</li>`;
                    });

                    // Languages
                    const languages = countryData.languages;
                    languagesOutput.innerHTML = ""; // Fix: use correct element and method
                    Object.keys(languages).forEach(key => {
                        languagesOutput.innerHTML += `<li>${languages[key]}</li>`;
                    });
                    //Partner list
                    const partnersList = document.querySelector(".partners-list");
                    partnersList.innerHTML = ""; // Clear previous content

                    if (orgPartners[countryData.name.common]) {
                        orgPartners[countryData.name.common].partners.forEach(partner => {
                            partnersList.innerHTML += `<li>${partner}</li>`;
                        });
                    } else {
                        partnersList.innerHTML = `<li>No registered partners in this country yet.</li>`;
                    }


                    // Hide loading after flag loads
                    countryFlagOutput.onload = () => {
                        container.classList.remove("hide");
                        loading.classList.add("hide");
                    };
                }, 500);
            })
            .catch(error => {
                loading.innerText = "No data to show for selected country";
                console.error("There was a problem with the fetching operation", error);
            });
    });
});
closeBtn.addEventListener("click", () => {
    sidePanel.classList.remove("side-panel-open")
});
let zoomValue = 100;
zoomOutBtn.disabled = true;
zoomInBtn.addEventListener("click", () => {
    zoomOutBtn.disabled = false;
    zoomValue += 100;
    if (zoomValue < 500) {
        zoomInBtn.disabled = false;
    }
    else {
        zoomInBtn = true;
    }
    map.style.width = zoomValue + "vw";
    map.style.height = zoomValue + "vh";
    zoomValueOutput.innerText = zoomValue + "%";
});
zoomOutBtn.addEventListener("click", () => {
    zoomInBtn.disabled = false;
    zoomValue -= 100;
    if (zoomValue > 100) {
        zoomOutBtn.disabled = false;
    }
    else {
        zoomOutBtn.disabled = true;
    }
    map.style.width = zoomValue + "vw";
    map.style.height = zoomValue + "vh";
    zoomValueOutput.innerText = zoomValue + "%";
});