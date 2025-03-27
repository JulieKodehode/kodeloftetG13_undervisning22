//OPPGAVE 1:
// Steg 1: Lag en async funskjon som heter fetchData
// Steg 2: Lag en variabel som bruker await for å ta i mot en array med objects
// Steg 3: Retuner den variabelen

async function fetchData() {
  const fruitBowl = [{ fruit: "Apple" }, { berry: "Banana" }];

  // Se i console
  console.log(fruitBowl);

  return fruitBowl;
}
// fetchData();

// OPPGAVE 2:
// Steg 1: Lag en async funskjon som heter dataRecieved
// Steg 2: Lag en variabel som bruker await for å ta i mot funksjonen getData
// Steg 3: Logg ut denne dataen
// Steg 4: Legg til denne dataen på siden

async function dataRecived() {
  const data = await fetchData();
  console.log(data[0].fruit);

  const response = data[0].fruit;

  // Se på nettside
  const viewFruitBowl = document.createElement("p");
  viewFruitBowl.textContent = response;
  const studyTask = document.querySelector("#studyTask");
  studyTask.appendChild(viewFruitBowl);
}

// dataRecived();
setTimeout(dataRecived, 3000);

//
//

// HER KODER VI SANNTID SAMMEN FOR CAT FACTS:

async function fetchApi() {
  // API-link: https://catfact.ninja/facts

  // Fetcher data fra catFact
  const data = await fetch("https://catfact.ninja/facts");
  console.log(data);

  // Parser fra JSON til Array
  const response = await data.json();

  // Hele arrayet
  console.log(response);
  // Vi finner data array, array med objects
  console.log(response.data);
  // Vi velger et spesifikt array
  console.log(response.data[0]);
  // Vi finner fact
  console.log(response.data[0].fact);

  //Lagre array av objects i en variabel
  const responseData = response.data;

  //forEach for å få ut hver fact på siden
  responseData.forEach((item) => {
    // Lag en variabel som tar hvert 'item' som går gjennom 'forEach' og gir de 'fact'
    const factItem = item.fact;
    console.log(factItem);

    // Lag et p-element som har innholdet til variabelen 'factItem' og legg 'viewFactItem' til i elementet med id-navn 'displayCatFact
    // const viewFactItem = document.createElement("p");
    // viewFactItem.textContent = factItem;
    // displayCatFact.appendChild(viewFactItem);

    // Setter opp hvert element i en liste istedenfor en enkel paragarf
    // Lag et li-element som har innholdet til variabelen 'factItem'
    const viewFactItem = document.createElement("li");
    viewFactItem.textContent = factItem;

    // Lag et ul-element som legger til 'li' til 'ul'
    const viewFactItemList = document.createElement("ul");
    viewFactItemList.appendChild(viewFactItem);

    // Hent elementet som har id-navn 'displayCatFact' og legg til ul til dette elementet
    const displayCatFact = document.querySelector("#displayCatFact");
    displayCatFact.appendChild(viewFactItemList);
  });
}

fetchApi();

//VI LAGER EN CHUCK NORRIS KNAPP

//API-link: https://api.chucknorris.io/jokes/random
