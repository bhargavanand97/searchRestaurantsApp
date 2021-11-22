import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer uCDV9zG4bVMQpBfkwLxLy1M7w_J5GLJewjoqnZ5J53pMKpQZosZYwzT4pdHDUFMBmoQaASmSLTf5kK6BaF87b_q9oOrumFQOnlTigOdjbsJSEGmo97NXDwtUdqmbYXYx',        
    }
});