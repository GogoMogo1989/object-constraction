/* function Country(name, short, population, flag, continent){
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

window.addEventListener("load", loadEvent); */

















/* function init(mathFunction){

    var a = 5;
    var b = 6;


    if(a < b){

        let c = mathFunction(b, a)
 */
       /*  (function(){
            var c = b - a;
            console.log(c)
        })(); */
    /*     console.log(c)
    }else{

        let c = mathFunction(a, b)
 */
        /* (function(){
            var c = a - b;
            console.log(c)
        })(); */
/*         console.log(c)
    }

};

function initC(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function initD(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

init(initD);

 */
const formHTML = () => {
    return`
    <form>
        <input id="input1" type="text" name="input1"/>
        <input id="input2" type="text"  name="input2"/>
        <input id="input3" type="text"  name="input2"/>
        <select id="animals" name="animals">
            <option value="cat5555">cat</option>
            <option value="dog5555">dog</option>
            <option value="both5555">both</option>
        </select>
        <button>Press</button>
    </form>
    
    <p id="values"></p>
    `
};


const loadEvent = async _ =>{







const rootElement = document.getElementById("root");
rootElement.insertAdjacentHTML("beforeend", formHTML());

const form = rootElement.querySelector("form");

const inputList = document.querySelectorAll('input');

console.log(typeof inputList);
console.log(Array.isArray)

Array.from(inputList).map(function(input){
    input.addEventListener("input", function(e){
    console.log(e.target.value);
    })
})

form.querySelector("select").addEventListener("input", function(e){
    console.log(e.target.value)
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(e.target)
})


/* for (input of inputList) {
    input.addEventListener("input", function(e){
        console.log(e.target.value)
    })
} */
/* const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
} */
    const nasaApiKey = `yRMJ55EZC4ZVMbdFlp24FhPyREzEPGnPrA0EmETF`
    const requestedDate = "2020-12-07"


    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`)
    const apodJson = await apod.json()
    
    
    

    console.log(apodJson.title)

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`).then(
        function(apodResponse){
            console.log(apodResponse)
            apodResponse.json().then(
                function(apodResponsejson){
                    console.log(apodResponsejson.title)
                }
            )
        }
    )

}
window.addEventListener("load", loadEvent);