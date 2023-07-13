import axios from 'axios';

let baseURL = 'http://localhost:5000/my-portfolio-6167f/us-central1';

if (!['localhost'].includes(window.location.hostname)) {
  baseURL = 'https://us-central1-my-portfolio-6167f.cloudfunctions.net';
}

const httpPlugin = {
  install(Vue) {
    const instance = axios.create({
      baseURL,
      timeout: 10000,
    });

    Vue.config.globalProperties.$http = instance;
  },
};

export default httpPlugin;