<template>
  <div id="app" :class="typeof weatherinfo.main != 'undefined' && weatherinfo.main.temp > 16 ? 'warm' : ''" >
    <main>
      <WeatherApp :w_data="w_data" @change-temp='changeTemp'/>
     
    </main>
  </div>
</template>

<script>
import WeatherApp from "./components/modules/WeatherApp.vue";

export default {
  name: "App",
  components: {
    WeatherApp,
  },
  data() {
    return {
      w_data: {
        api_key: "6314c3d9478f582a3d9454809cfc7c44",
        url_base: "https://api.openweathermap.org/data/2.5/",
      },
      query: "",
      weatherinfo: Object,
    };
  },
  methods: {
    changeTemp(temp) {
      this.weatherinfo = temp;
     // console.log(this.weatherinfo)
   // alert(this.temp)
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}

body {
  font-family: "montserrat", sans-serif;
}

#app {
  background-image: url("./assets/chill-forest.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.warm {
  background-image: url("./assets/warm-forest.jpg");
}
#app.cold {
  background-image: url("./assets/chill-forest.jpg");
}
</style>
