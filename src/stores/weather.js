import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    api_key: "bc74b27219e40124d86e9a9f80f9238b",
    // weather_icon: " https://openweathermap.org/img/wn/",
    location_quary: "",
    weather: {},
  }),
  getters: {},
  actions: {
    async fetchWeather(e) {
      if (e.key == "Enter") {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.location_quary}&units=metric&appid=${this.api_key}`
        );
        console.log(data);
        this.weather = data;
      }
    },
  },
});
