import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://hawkeye-a18e7.firebaseio.com/'
});

export default instance;