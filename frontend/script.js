function Country(name, short, population, flag, continent){
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}


const menuButton = () => {
    return`
    <button id="menuBtn">
        <svg width="40" height="40">
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg>
        <span>button</span>
    </button>
    `
}

//Componens
const header = (logo, button) => {
    return`
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>`
}

const countryCard =  (name, short, population, flag, continent) => { //fontoas!!!
    return`
    <div class="countryCard">
        <ul>
            <h1>${name}</h1>
            <p>${short}</p>
            <p>${population}</p>
            <img src="${flag}">
            <p>${continent}</p>
        </ul>
    </div>
    `
}

//menubutton


const loadEvent = async  _ => {
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();

    console.log(countryArr[0]);

    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    })

    let cards = ""; //fontos

        for (const country of countries){
            cards += countryCard(country.name, country.short, country.population, country.flag, country.content)
        }

    console.log(countries)

    let rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", header("Countries", menuButton));
    rootElement.insertAdjacentHTML("beforeend", cards); //fontos

    const menuBtn = document.getElementById("menuBtn")
    menuBtn.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked");
    })
}

window.addEventListener("load", loadEvent);