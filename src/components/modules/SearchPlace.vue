<template>
  <div>
    <div class="search-box">
      <input
        type="text"
        class="search-bar"
        placeholder="Search..."
        @keypress="changehWeather"
        v-model="query"
      />
      <!-- v-model="query"
        @keypress="fetchWeather" -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    w_data: Object,
  },
  name: "SearchPlace",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    changehWeather(e) {
      if (e.key == "Enter") {
            // alert(this.query)
      this.$store.dispatch("fetchWeather",[this.w_data,this.query]).then((response) => {
        console.log(response);
      });
      
      }
    },
  },
};
</script>

<style scoped>
.search-box {
  width: 100%;
  margin-bottom: 30px;
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

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
</style>