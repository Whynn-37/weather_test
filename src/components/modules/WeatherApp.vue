<template>
  <div>
    <SearchPlace :w_data="w_data" @change-temp="$emit('change-temp', getWeatherDetails)"/>
    <div class="weather-wrap"  v-if="typeof getWeatherDetails.main != 'undefined'" >
   
      <div class="location-box">
        <div class="location">
          {{ getWeatherDetails.name }}, {{ getWeatherDetails.sys.country }}
        </div>
        <div class="date">{{ dateToday() }}</div>
      </div>

      <div class="weather-box">
        <div class="temp" >{{ Math.round(getWeatherDetails.main.temp) }}°c</div>
        <div class="weather">{{ getWeatherDetails.weather[0].main }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPlace from "../modules/SearchPlace.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    w_data: Object,
  },
  components: {
    SearchPlace,
  },
  name: "WeatherApp",
  methods: {
    ...mapActions(["fetchWeather"]),
    dateToday() {
      let today = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[today.getDay()];
      let date = today.getDate();
      let month = months[today.getMonth()];
      let year = today.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
  computed: mapGetters(["getWeatherDetails"]),
  created() {
    // this.fetchWeather();
  },
};
</script>

<style >
.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>