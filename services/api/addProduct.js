import axios from 'axios'
import querystring from 'querystring'

export function addProduct(data, csrttoken) {
    return new Promise((resolve, reject) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrttoken
            }
        }
        data['pics_list'] = querystring.stringify(data['pics_list'])
        data['tags'] = querystring.stringify(data['tags'])
        let content = {
            data: querystring.stringify(data)
        }
        console.log(content)
        axios.defaults.withCredentials = true
        axios.post('https://www.mormade.com/api/products/', querystring.stringify(content), axiosConfig)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}