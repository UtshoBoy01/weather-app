<script setup>
import { useWeatherStore } from "./stores/weather";

const weatherStore = useWeatherStore();
</script>

<template>
  <div class="container">
    <div class="wrap">
      <!--* Search Box -->
      <div class="search-box">
        <input
          type="text"
          placeholder="Search..."
          class="search-bar"
          v-model="weatherStore.location_quary"
          @keypress="weatherStore.fetchWeather"
        />
      </div>
      <!--* Aria Info Box -->
      <div class="weather-info" v-if="weatherStore.weather.main != undefined">
        <div class="location-box">
          <div class="location">
            {{ weatherStore.weather.name }},
            {{ weatherStore.weather.sys.country }}
          </div>
          <div class="date">{{ new Date().toLocaleString() }}</div>
        </div>

        <!--* Weather Box -->
        <div class="weather-box">
          <div class="temp">{{ weatherStore.weather.main.temp }} °C</div>
          <div class="weather">{{ weatherStore.weather.weather[0].main }}</div>
          <div class="icon">
            <img
              :src="`https://openweathermap.org/img/wn/${weatherStore.weather.weather[0].icon}@2x.png`"
              alt=""
            />
          </div>
          <div class="other-info">
            <p class="pressure">
              Pressure :{{ weatherStore.weather.main.pressure }} mb
            </p>
            <p class="pressure">
              Humidity: {{ weatherStore.weather.main.humidity }}%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Montserrat", serif;
}
.container {
  background-image: url("../src/assets/defoult.jpg");
  background-size: cover;
  background-position: center;
  transition: 0.4s;
  width: 375px;
  margin: 0 auto;
  border-radius: 25px;
  margin-top: 50px;
  box-shadow: 0px 8px 20px #00000065;
}
.wrap {
  height: auto;
  padding: 15px;
  border-radius: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.4)
  );
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: rgba(236, 226, 226, 0.5);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: rgba(236, 226, 226, 0.25);
  background-color: rgba(236, 226, 226, 0.75);
}
.location-box .location {
  color: white;
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin-top: 30px;
}

.location-box .date {
  color: white;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}
.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: white;
  font-size: 80px;
  font-weight: 900;
  text-shadow: 5px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 26px;
  margin: 30px 0px;
  box-shadow: 5px 8px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: white;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 5px 8px rgba(0, 0, 0, 0.25);
}
.other-info {
  display: flex;
  justify-content: space-between;
}
.pressure {
  color: aliceblue;
  font-size: 18px;
}
</style>
