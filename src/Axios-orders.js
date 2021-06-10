import axios from 'axios'
const instance=axios.create({
    baseURL: 'https://store-d3c71-default-rtdb.firebaseio.com/'
})

export default instance