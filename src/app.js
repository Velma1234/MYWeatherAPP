function refreshWeather(response){
   let temperatureElement = document.querySelector("#weatherappTemperature");
   console.log(temperatureElement)
   let temperature= response.data.temperature.current;
   let cityElement = document.querySelector("#city");
   let descriptionElement = document.querySelector("#description");
   let humidityElement = document.querySelector("#humidity")
   let windElement = document.querySelector("#wind")
   let timeElement= document.querySelector("#time");
   let date = new Date(response.data.time * 1000 );

    cityElement.innerHTML = response.data.city;

    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature .humidity}% ` ;
    windElement.innerHTML = `${ response.data.wind.speed}km/h`;
    temperatureElement.innerHTML= Math.round(temperature);

}

function formatDate(date) {
    let hours = date.getHours();
    let minutes= date.getMinutes();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday' , 'Friday', 'Sartuday'];

    let day = days[date.getDay()];
    if (minutes < 10){
        minutes = `0${minutes}`;

    }

    return `${day} ${hours}:${minutes}`;
}


function searchCity (city){
    let apiKey = "9094e1e8bc4be419b3a3btd1e9oa78f2";
    let apiUrl =
      `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey} `;
      
      axios.get(apiUrl).then(refreshWeather)

}

//search engine functionality
function SearchSubmitButton(event){
    event.preventDefault();
    let searchInput = document.querySelector("#searchFormInput");

    searchCity(searchInput.value);
};

let weatherSearchForm = document.querySelector("#searchForm");

weatherSearchForm.addEventListener("submit", SearchSubmitButton);

searchCity("Nairobi")