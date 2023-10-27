const axios = require('axios');
//import axios from "axios";
const mock=async( _id)=>{
    let result= axios.get(`https://dummy.restapiexample.com/api/v1/employee/${_id}`)
    console.log(result.data);
    
    return result.data;
}
//mock(1);

module.exports=mock;