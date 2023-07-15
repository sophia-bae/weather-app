const apiKey = "213c7fb7e94249339cc7b0fe98e82118";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else{

        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " mph";


        if(data.weather[0].main == "Clouds"){
            weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.innerHTML = `<i class="fa-regular fa-cloud-rain"></i>`;
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.innerHTML = `<i class="fa-solid fa-smog"></i>`;
        }


        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";




    }


    

}


searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

