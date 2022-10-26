
// constants and variables

const API_KEY = 'b6cdcef23c3f59cbf38ad4b7ce092023';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'


// Cached Element References
//grab the html elements and cache them in jquery variables
// $variableName = $('{this selector can be an element, class or an ID}')
let $title = $("#title")


// Functions

//function handling sumbmit of our form

let $submit = $("#submit")

$submit.submit((e)=> {
 e.preventDefault()
 handleGetData()

} )

//q={city name}&appid={API key}

function handleGetData(city) {
    let $text = $("#text") // get value out of data. 
    console.log("#text")
    $.ajax(BASE_URL + 'q=' +city+ '&appid=' + API_KEY)
    .then(function(data) {
        console.log('Data: ', data);
        $main = $("main") // grab the main element
        //render the data properties to the jquery variables
        $title.text(data.name) 
        // data.weather.forEach((temp,index) => {
        //     const div = $('<div>')
        //     div.html(`<h1>${temp}</h1>`)
        //     $main.append(div)
        // })
    }, function(error) {
        console.log('Error: ', error);
    })
    
    
    // let's render to the screen
    
    
}

//Render to the screen
//on click submit
//from 










// pass a search parameter to handle the getdata function

//function handling sumbmit of our form
// gather the input from city input and store in variable
//gather the value from the state input and store in a variable
// pass in the city and state variables as aarguments to our handlegetdata

