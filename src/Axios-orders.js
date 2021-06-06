import axios from 'axios'
const instance=axios.create({
    baseURL: 'https://store-4a562-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

export default instance