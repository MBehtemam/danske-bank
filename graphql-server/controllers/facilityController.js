const fetch = require('node-fetch');
const {facilityEndpoint} = require('../endpoints')
const getFacility = async(facilityId) => {
    try{
        const res = await fetch(`${facilityEndpoint}/${facilityId}`);
        const {success, data, message} = await res.json();
        if(success){
            return data;
        }else {
            throw `Something bad happen`;
        }
    }
    catch(err){
        throw  err
    }   
}

module.exports = {
    getFacility
}