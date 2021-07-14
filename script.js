// const cities = ["London", "Paris", "New York", "california"];
const today = new Date();
const day = moment().format('dddd MMMM Do YYYY');
const key = 'f5c3aa4034bf39238e3769ad247499fd';
const searchBtn = $('#searchBtn')
const citySearch = $('#citySearch');

function fiveDayForecast () {
  $.get({
    url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch.val() + '&appid=' + key
  }).then(function(forecast) {
    console.log (forecast.list)

    for(let i = 4; i < forecast.list.length; i += 8){
      console.log(forecast.list[i])

forecast.list.forEach(days => {
      // Create a new element to hold each day's data in the DOM:
      // const nextDay = new Date(i)
      // const forecastDateEl=document.createElement("p")
      // forecastDateEl.appendChild(nextDay)
      
      // Create an element to hold the temp data:
      const forecastContainer = document.getElementById("forecastContainer")
      const forecastTemp = days.main.temp - 273 *1.8 + 32;
      const forecastTempEl = document.createElement('p')
      forecastTempEl.innerText = Math.round(forecastTemp) + '°F'
      forecastContainer.appendChild(forecastTempEl)

      const icon = days.weather[0].icon;
      const fff =document.get
      const iconEl = document.createElement('img')
      iconEl.src = 'http://openweathermap.org/img/wn/' + icon + '.png'
      forecastContainer.appendChild(iconEl)
      
      


      // const forecastSectionEl = document.getElementById("forecastSection")
      // forecastSectionEl.appendChild(forecastContainer)

     
      



      // const nextDay= new Date();
      //   const days = moment().format('dddd MMMM Do YYYY');
        // const forecastDate = document.getElementById("forecastDate")
        // forecastDate.textContent = (forecast.list.dt_txt)
        // const forecastTemp = document.getElementById('forecastTemp');
        // forecastTemp.textContent = "Temp: " + ((forecast.list.main.temp - 273.15) * 1.8) + 32 + " degrees" + " F";
        // const forecastHumidity = document.getElementById('forecastHumidity');
        // forecastHumidity.textContent = "Humidity: " + (forecast.list.main.humidity) + "%";
        // const forecastWindSpeed = document.getElementById('forecastWindSpeed');
        // forecastWindSpeed.textContent = "Wind Speed: " + (forecast.list.wind.speed) + "mph";
        // const forecastUvIndex = document.getElementById('forecastUvIndex');
        // forecastUvIndex.textContent = "UV Index: " + (forecast.list.uvi); 
})
    
  }
})
}



searchBtn.click(function (event) {
  // document
  // .getElementById('weatherSearchResults')
  // .setAttribute('style', 'display: block')
  event.preventDefault()
  fiveDayForecast ()
  
  const weatherApiUrl= 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch.val() + '&appid=' + key
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
         
  
        
        const today = new Date();
        const day = moment().format('dddd MMMM Do YYYY');
        document.getElementById("date").innerHTML = "Today " + day;
        const tempFahrenheit = document.getElementById('temp');
        tempFahrenheit.textContent = "Temp: " + ((data.main.temp - 273.15) * 1.8) + 32 + " degrees" + " F";
        const humidity = document.getElementById('humidity');
        humidity.textContent = "Humidity: " + (data.main.humidity) + "%";
        const windSpeed = document.getElementById('windSpeed');
        windSpeed.textContent = "Wind Speed: " + (data.wind.speed) + "mph";
        const uvIndex = document.getElementById('uvIndex');
        uvIndex.textContent = "UV Index: " + (data.uvi);    
        
        

                
                //


        // const nextDay = new Date();
        // const day2 = moment().utc().format('dddd MMMM Do YYYY');
        // document.getElementById("date2").innerHTML = + day2;

        // const tempFahrenheit = document.getElementById('temp2');
        // tempFahrenheit.textContent = "Temp: " + ((getWeatherData.main.temp - 273.15) * 1.8) + 32 + " degrees" + " F";
        // const humidity2 = document.getElementById('humidity2');
        // humidity2.textContent = "Humidity: " + (getWeatherData.main.humidity) + "%";
        // const windSpeed2 = document.getElementById('windSpeed2');
        // windSpeed2.textContent = "Wind Speed: " + (data.wind.speed) + "mph";
        // const uvIndex2 = document.getElementById('uvIndex2');
        // uvIndex2.textContent = "UV Index: " + (data.uvi);  



                

              }
            )
          
          
          }
    )
    

   
    
   









