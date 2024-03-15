import axios from "axios";



export default axios.create({
    baseURL : "https://api.powerbi.com/v1.0/myorg",
    // auth : {
    //     username : "cbre",
    //     password : "ff9cd34bb41cdaa69441ca4a1ab5d91be6a94c222bc812b96448b6bb388b89c9"
    // }
});