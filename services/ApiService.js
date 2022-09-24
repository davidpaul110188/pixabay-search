import Config from "react-native-config";
import axios from 'axios'

export const getImages = (term, page) => {
    return axios.get(`https://pixabay.com/api/?key=${Config.API_KEY}&q=${term}&image_type=photo&per_page=30&page=${page}`)
}