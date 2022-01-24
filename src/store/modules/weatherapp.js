import axios from "axios";


const state = {
    weatherinfo: []
};

const getters = {
    getWeatherDetails: state => state.weatherinfo
};

const actions = {
    async fetchWeather({ commit },data) {
        //console.log(1);
        // return new Promise((resolve, reject) => {
        //     axios
        //         .get(
        //             // `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&APPID=${this.api_key}`
        //             `https://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&APPID=6314c3d9478f582a3d9454809cfc7c44`
        //         )
        //         .then(function (response) {
        //             commit("setweather", response.data);
        //             resolve(response); 
        //         })
        //         .catch(function (error) {
        //             reject(error);
        //         });
        // })

        const response = await axios.get(
            //`https://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&APPID=6314c3d9478f582a3d9454809cfc7c44`
            `${data[0]['url_base']}weather?q=${data[1]}&units=metric&APPID=${data[0]['api_key']}`
          );
      
          commit("setweather",  response.data);
    }
};

const mutations = {
    setweather: (state, weatherinfo) => (state.weatherinfo = weatherinfo),
};

export default {
    state,
    getters,
    actions,
    mutations
}