import axios from 'axios'


axios.defaults.headers.common['Authorization'] ="Bearer "+ localStorage.getItem('doctor-token')


// axios.defaults.baseURL = 'http://localhost:8000/api' 
axios.defaults.baseURL = 'http://doctor-mavix.epizy.com/api' 



axios.defaults.headers.common['Content-Type'] = 'application/json'
    
axios.defaults.headers.common['Accept'] = 'application/json'
