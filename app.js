const apiKey = "b6cdcef23c3f59cbf38ad4b7ce092023";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

// Search for weather
function search(inputText) {
  const url = `${baseUrl}?q=${inputText}&appid=${apiKey}`;

  $.ajax(url).then((weather) => {
    console.log(weather);
    // $.ajax(`weather ${data.long}&${data.lat}`).then((weather) => {

    // weather.name.forEach((weather) => {
    const $h2 = $(`<h2>${weather.name}</h2>`);
    const $h3 = $(`<h3>${weather.main.temp}</h3>`);
    const $h4 = $(`<h4>${weather.main.feels_like}</h4>`);
    const $h5 = $(`<h5>${weather.weather[0].description}</h5>`);
    $("h2").text(`weather for ${weather.name}`);
    $("h3").text(`temperature ${weather.main.feels_like}`);
    $("h4").text(`feels like ${weather.main.temp}`);
    $("h5").text(`weather is ${weather.weather[0].description}`);
    // });

    // });
  });
}

// grab the submit button, put a click event on it
$("input[type=submit]").on("click", (event) => {
  // declare the event to prevent default
  event.preventDefault();

  // grab the text from the input box
  const inputText = $("input[type=text]").val();

  console.log(inputText);
  // update the screen
  search(inputText);
});

// search();
// // console.log(apiKey, baseUrl)
