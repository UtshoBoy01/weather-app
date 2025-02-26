<script setup></script>

<template>
  <div class="container">
    <div class="wrap">
      <!--* Search Box -->
      <div class="search-box">
        <input type="text" placeholder="Search..." class="search-bar" />
      </div>
      <!--* Aria Info Box -->
      <div class="weather-info">
        <div class="location-box">
          <div class="location">Dhaka</div>
          <div class="date">17-12-2025</div>
        </div>
      </div>
      <!--* Weather Box -->
      <div class="weather-box">
        <div class="temp">22 °C</div>
        <div class="weather">aabbvc</div>
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
  height: 600px;
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
  font-size: 100px;
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
</style>
