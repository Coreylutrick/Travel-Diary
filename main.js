const countries = [
  {
      image: "http://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2017/08/shutterstock_611229743-bde2e023e33c.jpg",
      countryName: "Switzerland",
      description: "Switzerland officially the Swiss Confederation, is a federal republic in Europe."
  },
  {
      image: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/30/wj/p030wjhm.jpg",
      countryName: "Mexico",
      description: "Mexico is a dessert/tropical country located in the southern tip of North America"
  },
  {
      image: "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5230047963001_5203640497001-vs.jpg?pubId=5104226627001&videoId=5203640497001",
      countryName: "Canada",
      description: "Canada is a cold country located in the northern part of North America. It is heavily wooded and has many mountains"
  },
  {
      image: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/04/92/d1/shutterstock-382716112.jpg",
      countryName: "Norway",
      description: "Norway is a very cold country located on the Scandinavian Peninsula."
  },
  {
      image: "https://www.nationalgeographic.com/content/dam/adventure/photos/2017/stories/amazing-iceland-adventures/Iceland-mount-Kirkjufell-aurora.jpg",
      countryName: "Iceland",
      description: "Iceland is a Nordic island country located in the North Atlantic Ocean."
  }
];

const printToDom = (domString, divId) => 
{
  const printTo = document.getElementById(divId);
  printTo.innerHTML = domString;
};

const cardMaker = (countryArray) => 
{
  let domString = "";
  countryArray.forEach((country) =>
  {
    domString += `<div class="card">`;
    domString +=   `<h1>${country.countryName}</h1>`;
    domString +=   `<h5>${country.description}</h5>`;
    domString +=   `<img class="countryImg" src="${country.image}" alt="Image of country"><br>`;
    domString +=   `<form id="frm"><input class="input1" type="text" placeholder="Give a brief description of your trip here!"></form><br>`;
    domString +=   `<button class="card-button">Submit</button>`;
    domString += `</div>`;
  })
  printToDom(domString, "card-holder");
}
cardMaker(countries);

const timestamp = new Date();

const divToGreen = (e) => 
{
    const cardDiv = e.target.parentElement;
    cardDiv.classList.add("green");
};

const clearField = () => 
{
  const clear = document.getElementById("frm").reset();
}

const allTheButtons = document.getElementsByClassName("card-button");
let output = document.getElementsByClassName("input1");
diaryArray = [];

for (let i=0; i < allTheButtons.length; i++)
{
  allTheButtons[i].addEventListener("click", (e) =>
  {
    let domString = "";
    domString += `<div class="diaries">`;
    domString +=  `<h1>${countries[i].countryName}</h1>`;
    domString +=  `<p>${output[i].value}</p>`;
    domString +=  `<p>${timestamp}</p>`
    domString += `</div>`;
    divToGreen(e);
    diaryArray.push(domString);
    printToDom(diaryArray, "diary-holder");
    clearField();
  })
};
