
const today = new Date();
const day = moment().format('dddd MMMM Do YYYY');
const key = 'f5c3aa4034bf39238e3769ad247499fd';
const searchBtn = $('#searchBtn')
const citySearch = $('#citySearch');
const pastCitySearchbtn = $('#pastCitysearch')
  
  function fiveDayForecast (event) {
  $.get({
    url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch.val() + '&appid=' + key + '&units=imperial'
  }).then(function(forecast) {
    // console.log (forecast.list)
    //for loop to pull 5 days of forecast 
    for(let i = 4; i < forecast.list.length; i += 8){
      const days = forecast.list[i]; 
      // Create an element to hold the temp data:
      const forecastContainer = document.getElementById("forecastContainer")
      const icon = days.weather[0].icon;
      const iconEl = document.createElement('img')
      iconEl.src = 'http://openweathermap.org/img/wn/' + icon + '.png'
      forecastContainer.appendChild(iconEl)
      // const nextDay = days.coord.dt 
      // const nextDayEl = document.createElement('p')
      // nextDayEl.innertext = nextDay
      // forecastContainer.appendChild(nextDayEl)
      const forecastTemp = (days.main.temp_min)
      const forecastTempEl = document.createElement('p')
      forecastTempEl.innerText = 'Temp: ' + Math.floor(forecastTemp) + '°F' 
      forecastContainer.appendChild(forecastTempEl)
      const forecastHumidity = (days.main.humidity)
      const forecastHumidityEl = document.createElement('p')
      forecastHumidityEl.innerText = 'Humidity: ' + forecastHumidity + '%'
      forecastContainer.appendChild(forecastHumidityEl)
      const forecastWindSpeed = Math.floor(days.wind.speed)
      const forecastWindSpeedEl = document.createElement('p')
      forecastWindSpeedEl.innerText = 'Wind Speed: ' + forecastWindSpeed + 'mph'
      forecastContainer.appendChild(forecastWindSpeedEl)
}
})
}
// saveBtn.click(function(event) {
//   console.log(event.target.parentNode);
//   // set data to local storage 
//   // whenever app loads get() local storage
// })
searchBtn.click(function (event) {
  event.preventDefault()
 
   // citySearch.push(storedCityValue)
  // storedCitySearch.innerText = (''

  fiveDayForecast (event)

   //   const storedCitySearch = JSON.parse(localStorage.getItem('citySearch'))
  //   if (storedCitySearch){
  //   storedCitySearch.innerText =('')
  
  // localStorage.setItem('citySearch', citySearch.val())
    // }
  // get citysearch element by id 
  // set the innerText equal to an empty string
  
  const weatherApiUrl= 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch.val() + '&appid=' + key + '&units=imperial'
    $.get({
        url: weatherApiUrl,
      }).then(function(data) {
          console.log(data)
        
        const city = document.getElementById("city");
        city.textContent += data.name;
        

        const icon = data.weather[0].icon;
        const iconCodeUrl = "https://openweathermap.org/img/w/" + icon + ".png";
        document.getElementById("weatherIcon")
          .setAttribute("src",iconCodeUrl)
        // const today = new Date();
        // const day = moment().format('dddd MMMM Do YYYY');
        document.getElementById("date").innerHTML = day;
        const tempFahrenheit = document.getElementById('temp');
        tempFahrenheit.textContent = "Temp: " + Math.floor(data.main.temp) + '°F';
        const humidity = document.getElementById('humidity');
        humidity.textContent = "Humidity: " + (data.main.humidity) + "%";
        const windSpeed = document.getElementById('windSpeed');
        windSpeed.textContent = "Wind Speed: " + (data.wind.speed) + "mph";
        const uvIndex = document.getElementById('uvIndex');
        uvIndex.textContent = "UV Index: " + (data.uvi);    
        


        //set ID attribute to the button globally 
            

              }
            )
          
            
          }
    )
    

   
    
   









