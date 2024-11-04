function refreshWeather(response){
   let temperatureElement = document.querySelector("#weatherappTemperature");
   console.log(temperatureElement)
   let temperature= response.data.temperature.current;
   let cityElement = document.querySelector("#city");

   
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML= Math.round(temperature);

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