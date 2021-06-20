import axios from "axios";
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/api'
export default {
    actions: {
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/register', {
                        name: data.name,
                        email: data.email,
                        password: data.password,
                    })
                    .then(response => console.log(response))
                    .catch(error => reject(error))
            })
        }
    },

};
