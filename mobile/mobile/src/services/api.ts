import axios from 'axios';
import { AppRegistry } from 'react-native';

const api = axios.create({
    baseURL: 'http://192.168.1.9:3333'
});

export default api;