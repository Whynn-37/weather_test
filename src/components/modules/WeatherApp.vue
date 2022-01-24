<template>
  <div>
    <SearchPlace :w_data="w_data"/>
    {{ w_data }}
    <br />
    {{ getWeatherDetails}}
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
  // mounted() {
  //   this.loadToSection();
  // },
  methods: {
    ...mapActions(["fetchWeather"]),
    // loadToSection: function () {
    //   this.$store.dispatch("fetchWeather").then((response) => {
    //     console.log(response);
    //   });
    // },
  },
  computed: mapGetters(["getWeatherDetails"]),
  created() {
    this.fetchWeather();
  },
};
</script>

<style>
</style>