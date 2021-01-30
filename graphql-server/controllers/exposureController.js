const fetch = require('node-fetch');
const {exposureEndpoint} = require('../endpoints')
const getExposure = async(exposureId) => {
    try{
        const res = await fetch(`${exposureEndpoint}/${exposureId}`);
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
    getExposure
}